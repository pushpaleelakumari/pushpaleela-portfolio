// Renders the built SPA in headless Chrome and writes the resulting HTML back
// into dist/, so crawlers get real markup. Replaces react-snap, whose bundled
// Chromium can't run on Vercel's build image.
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import puppeteer from 'puppeteer-core'

const DIST = path.resolve(process.env.DIST ?? 'dist')
const ROUTES = ['/']
const PORT = 45678

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.avif': 'image/avif',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

// Minimal static server with SPA fallback to index.html
const shell = await fs.readFile(path.join(DIST, 'index.html'))
const server = http.createServer(async (req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  const file = path.join(DIST, urlPath)
  try {
    if (!file.startsWith(DIST)) throw new Error('outside dist')
    const body = await fs.readFile(file)
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' })
    res.end(body)
  } catch {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(shell)
  }
})
await new Promise((resolve) => server.listen(PORT, resolve))

async function launchOptions() {
  if (process.env.CHROME_PATH) {
    return { executablePath: process.env.CHROME_PATH, headless: true }
  }
  if (process.platform === 'linux') {
    // Self-contained Chromium build; works without system libs (Vercel, CI)
    const { default: chromium } = await import('@sparticuz/chromium')
    return { executablePath: await chromium.executablePath(), args: chromium.args, headless: true }
  }
  const candidates = {
    win32: [
      'C:/Program Files/Google/Chrome/Application/chrome.exe',
      'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    ],
    darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
  }[process.platform] ?? []
  for (const p of candidates) {
    try {
      await fs.access(p)
      return { executablePath: p, headless: true }
    } catch { /* try next */ }
  }
  throw new Error('No Chrome found. Set CHROME_PATH to a Chrome/Edge executable.')
}

const browser = await puppeteer.launch(await launchOptions())
try {
  for (const route of ROUTES) {
    const page = await browser.newPage()
    // main.tsx exposes snapSaveState for this user agent
    await page.setUserAgent({ userAgent: 'ReactSnap' })
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' })
    await page.waitForFunction(() => document.getElementById('root')?.hasChildNodes())
    await page.evaluate(() => window.snapSaveState?.())
    // Adjacent text nodes merge when HTML is re-parsed, which breaks hydration.
    // Separate them with <!-- --> the same way React's server renderer does.
    await page.evaluate(() => {
      const walker = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT)
      const nodes = []
      while (walker.nextNode()) nodes.push(walker.currentNode)
      for (const node of nodes) {
        if (node.previousSibling?.nodeType === Node.TEXT_NODE) {
          node.parentNode.insertBefore(document.createComment(' '), node)
        }
      }
    })
    const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))
    const out = path.join(DIST, route, 'index.html')
    await fs.mkdir(path.dirname(out), { recursive: true })
    await fs.writeFile(out, html)
    console.log(`prerendered ${route} -> ${path.relative(process.cwd(), out)}`)
    await page.close()
  }
} finally {
  await browser.close()
  server.close()
}
