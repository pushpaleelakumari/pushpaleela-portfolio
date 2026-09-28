import { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  z: number
  r: number
  t: number
  ts: number
  hue: string
}

type Shot = { x: number; y: number; v: number; l: number }

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let w = 0
    let h = 0
    let dpr = 1
    let stars: Star[] = []
    const shoot: Shot[] = []
    let scrollPos = 0
    let raf = 0

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas!.width = window.innerWidth * dpr
      h = canvas!.height = window.innerHeight * dpr
      canvas!.style.width = window.innerWidth + "px"
      canvas!.style.height = window.innerHeight + "px"

      const n = Math.round((window.innerWidth * window.innerHeight) / 6500)
      stars = []
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 1 + 0.25,
          r: (Math.random() * 1.3 + 0.3) * dpr,
          t: Math.random() * 6.28,
          ts: Math.random() * 0.03 + 0.006,
          hue: Math.random() < 0.15 ? "170,190,255" : Math.random() < 0.3 ? "255,200,150" : "255,255,255",
        })
      }
    }

    function onScroll() {
      scrollPos = window.scrollY
    }

    function loop() {
      ctx!.clearRect(0, 0, w, h)

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        s.t += s.ts
        const tw = 0.55 + Math.sin(s.t) * 0.45
        let py = s.y - scrollPos * dpr * s.z * 0.12
        py = ((py % h) + h) % h

        ctx!.beginPath()
        ctx!.fillStyle = `rgba(${s.hue},${tw.toFixed(3)})`
        ctx!.arc(s.x, py, s.r, 0, 6.28)
        ctx!.fill()

        if (s.z > 1.05) {
          ctx!.fillStyle = `rgba(${s.hue},${(tw * 0.15).toFixed(3)})`
          ctx!.beginPath()
          ctx!.arc(s.x, py, s.r * 2.4, 0, 6.28)
          ctx!.fill()
        }
      }

      if (!reduce) {
        if (Math.random() < 0.004 && shoot.length < 2) {
          shoot.push({
            x: Math.random() * w,
            y: Math.random() * h * 0.5,
            v: (6 + Math.random() * 5) * dpr,
            l: 0,
          })
        }
        for (let j = shoot.length - 1; j >= 0; j--) {
          const m = shoot[j]
          m.l += m.v
          m.x += m.v
          m.y += m.v * 0.4
          const g = ctx!.createLinearGradient(m.x, m.y, m.x - 90 * dpr, m.y - 36 * dpr)
          g.addColorStop(0, "rgba(255,220,180,.9)")
          g.addColorStop(1, "rgba(255,220,180,0)")
          ctx!.strokeStyle = g
          ctx!.lineWidth = 1.6 * dpr
          ctx!.beginPath()
          ctx!.moveTo(m.x, m.y)
          ctx!.lineTo(m.x - 90 * dpr, m.y - 36 * dpr)
          ctx!.stroke()
          if (m.l > window.innerWidth * dpr) shoot.splice(j, 1)
        }
      }

      raf = requestAnimationFrame(loop)
    }

    size()
    window.addEventListener("resize", size)
    window.addEventListener("scroll", onScroll, { passive: true })
    loop()

    return () => {
      window.removeEventListener("resize", size)
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas id="stars" ref={canvasRef} aria-hidden="true" />
}

export default StarField
