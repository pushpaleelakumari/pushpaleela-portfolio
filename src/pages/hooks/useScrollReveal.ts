import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-section")

    if (reduce) {
      els.forEach((el) => el.classList.add("in"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
