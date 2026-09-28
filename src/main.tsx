import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './global.css'

const rootEl = document.getElementById('root')!

if (navigator.userAgent === 'ReactSnap') {
  ;(window as unknown as { snapSaveState: () => Promise<void> }).snapSaveState = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
  }
}

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
