import { useState } from "react"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/5 bg-space-950">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-400/70">
            <span className="absolute inset-0 rounded-full bg-accent-400/30 blur-md animate-glow-pulse" />
            <span className="relative h-3 w-3 rounded-full bg-accent-400" />
          </span>
          <span className="flex flex-col justify-center leading-tight">
            <span className="text-base font-bold tracking-wide text-white md:text-lg">
              Pushpa Leela Kumari
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent-400/80 md:text-xs">
              Senior Software Developer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`relative pb-1 text-sm font-medium transition-colors duration-300 ${
                active === link.label
                  ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-accent-400 after:content-['']"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-white/10 md:hidden"
        >
          <span className={`h-[1.5px] w-5 bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[1.5px] w-5 bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/5 bg-space-950/95 px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-300 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label)
                setOpen(false)
              }}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                active === link.label ? "bg-white/5 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
