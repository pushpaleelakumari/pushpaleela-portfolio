import { useMemo, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import type { Swiper as SwiperClass } from "swiper"
import "swiper/css"

const HIRINGHOOD_STACK = [
  "React.js",
  "React Query",
  "Redux",
  "MUI",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "React Snap",
  "Helmet SEO",
]

const PROJECTS = [
  {
    tag: "Next.js 13 · TypeScript · AWS",
    title: "WorldTradeX",
    description:
      "Global commodity trading platform on a monorepo architecture — SSR + CSR, Stripe payments, GraphQL search, and real-time chat with video uploads that lifted engagement ~40-50%.",
    stack: ["Next.js", "TypeScript", "Monorepo", "AWS", "GraphQL", "Stripe"],
    href: null as string | null,
    art: (
      <svg className="art" viewBox="0 0 480 270" role="img" aria-label="WorldTradeX — amber gas giant">
        <defs>
          <radialGradient id="a1" cx="35%" cy="35%" r="80%">
            <stop offset="0%" stopColor="#ffb457" />
            <stop offset="45%" stopColor="#c9591b" />
            <stop offset="100%" stopColor="#2a0f06" />
          </radialGradient>
          <linearGradient id="a1b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffd9a0" />
            <stop offset="1" stopColor="#ff6a00" />
          </linearGradient>
        </defs>
        <rect width="480" height="270" fill="#04050a" />
        <g fill="#fff">
          <circle cx="60" cy="50" r="1.3" opacity=".7" />
          <circle cx="420" cy="40" r="1.6" opacity=".8" />
          <circle cx="380" cy="210" r="1.2" opacity=".6" />
          <circle cx="120" cy="220" r="1.5" opacity=".7" />
          <circle cx="240" cy="30" r="1.1" opacity=".5" />
        </g>
        <ellipse
          cx="330"
          cy="150"
          rx="230"
          ry="30"
          fill="none"
          stroke="url(#a1b)"
          strokeWidth="4"
          opacity=".8"
          transform="rotate(-18 330 150)"
        />
        <circle cx="330" cy="150" r="88" fill="url(#a1)" />
        <path d="M250 140 q80 -22 160 6" stroke="rgba(0,0,0,.25)" strokeWidth="10" fill="none" />
        <path d="M255 168 q75 18 150 -2" stroke="rgba(255,240,220,.18)" strokeWidth="6" fill="none" />
      </svg>
    ),
  },
  {
    tag: "React · Redux Toolkit · AWS S3",
    title: "M-Price India — Merck",
    description:
      "Chemical & pharmaceutical e-commerce platform. Bulk product management via xlsx upload straight to S3, GraphQL data layer, and a Redux-Toolkit state core for high-volume catalogs.",
    stack: ["React", "Redux Toolkit", "TypeScript", "GraphQL", "AWS S3"],
    href: "https://www.sigmaaldrich.com/IN/en",
    art: (
      <div className="art logo-tile">
        <img src="/images/projects/merk.png" alt="Merck" />
      </div>
    ),
  },
  {
    tag: "ReactJS · Redux · Zoho API",
    title: "Buckler",
    description:
      "Society-management platform built from scratch with React, Formik, Redux and Axios. Integrated the Zoho Books API for streamlined invoicing across interdependent resident portals.",
    stack: ["ReactJS", "Formik", "Redux", "Axios", "Bootstrap", "Zoho Books"],
    href: null as string | null,
    art: (
      <div className="art logo-tile">
        <img src="/images/projects/buckler.svg" alt="Buckler" />
      </div>
    ),
  },
  {
    tag: "React.js · Redux · Node.js · MongoDB",
    title: "Hiringhood",
    description:
      "AI/ML hiring platform connecting employers, recruiters and jobseekers through three dedicated portals — job posting, applicant tracking and candidate discovery on one React front end. Built with zero-cost SEO via React-Snap SSG and Helmet.",
    stack: HIRINGHOOD_STACK,
    href: "https://hiringhood.ai/",
    art: (
      <div className="art logo-tile">
        <img src="/images/projects/hiringhood.svg" alt="Hiringhood" />
      </div>
    ),
  },
  {
    tag: "React.js · Redux · Node.js · MongoDB",
    title: "Matchday",
    description:
      "Bulk-hiring walk-in platform — admins schedule interview drives, employers register for the week's open drives, and jobseekers see recommended drives to walk in and interview on the spot, compressing the entire recruiting cycle into a day or two.",
    stack: HIRINGHOOD_STACK,
    href: "https://matchday.hiringhood.ai/",
    art: (
      <div className="art logo-tile">
        <img src="/images/projects/matchday.svg" alt="Matchday" />
      </div>
    ),
  },
  {
    tag: "React · GraphQL · AWS",
    title: "Equidefi",
    description:
      "Contributed frontend features to Equidefi's investor-facing platform, working across shared React/GraphQL infrastructure alongside The Bench's admin tooling.",
    stack: ["React", "GraphQL", "Redux", "AWS"],
    href: null as string | null,
    art: (
      <div className="art logo-tile">
        <img src="/images/projects/equidefi.avif" alt="Equidefi" />
      </div>
    ),
  },
  {
    tag: "React · GraphQL · AWS",
    title: "Phox Health",
    description:
      "Built frontend features for Phox Health's care-coordination product, sharing the same React/GraphQL foundation and component patterns established for The Bench.",
    stack: ["React", "GraphQL", "Formik", "AWS"],
    href: null as string | null,
    art: (
      <div className="art logo-tile">
        <img src="/images/projects/phox-health.avif" alt="Phox Health" />
      </div>
    ),
  },
  {
    tag: "React · Vite · Tailwind · Firebase",
    title: "GGaming",
    description:
      "A gaming-community marketing site built solo for a private client — no Figma handoff, just their verbal brief, so the UI, motion and every animated spinner were designed and coded from scratch, then refined over several rounds of client discussion. Includes a QR-code payment flow for direct in-app payments.",
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "Netlify", "QR Payments"],
    href: "https://6aaa197851e407edc0e91fdf--ggaming-marketing.netlify.app/en",
    art: (
      <svg className="art" viewBox="0 0 480 270" role="img" aria-label="GGaming — neon violet arena">
        <defs>
          <radialGradient id="a5" cx="35%" cy="35%" r="80%">
            <stop offset="0%" stopColor="#f0a6ff" />
            <stop offset="45%" stopColor="#9b3bc9" />
            <stop offset="100%" stopColor="#1a0630" />
          </radialGradient>
          <linearGradient id="a5b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffd9f7" />
            <stop offset="1" stopColor="#c026d3" />
          </linearGradient>
        </defs>
        <rect width="480" height="270" fill="#04050a" />
        <g fill="#fff">
          <circle cx="70" cy="60" r="1.3" opacity=".7" />
          <circle cx="410" cy="50" r="1.6" opacity=".8" />
          <circle cx="360" cy="215" r="1.2" opacity=".6" />
          <circle cx="110" cy="210" r="1.5" opacity=".7" />
        </g>
        <ellipse
          cx="240"
          cy="140"
          rx="200"
          ry="26"
          fill="none"
          stroke="url(#a5b)"
          strokeWidth="4"
          opacity=".8"
          transform="rotate(-14 240 140)"
        />
        <circle cx="240" cy="140" r="82" fill="url(#a5)" />
        <path d="M180 130 q60 -18 120 4" stroke="rgba(0,0,0,.25)" strokeWidth="8" fill="none" />
      </svg>
    ),
  },
]

function Projects() {
  const swiperRef = useRef<SwiperClass | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = useMemo(
    () =>
      PROJECTS.map((project) => (
        <SwiperSlide key={project.title}>
          <article className="card">
            {project.art}
            <div className="body">
              <div className="tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.href && (
                <a className="visit" href={project.href} target="_blank" rel="noopener noreferrer">
                  Visit site &rarr;
                </a>
              )}
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        </SwiperSlide>
      )),
    []
  )

  return (
    <section id="projects" className="reveal-section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="num mono">02 / PROJECTS</div>
            <h2>Worlds I've built</h2>
          </div>
          <p className="sub">Selected systems — trading, commerce and platform work across React, Next.js and AWS.</p>
        </div>

        <div className="projects-carousel reveal">
          <Swiper
            modules={[Autoplay]}
            grabCursor
            loop
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            onSwiper={(instance) => {
              swiperRef.current = instance
            }}
            onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
            spaceBetween={22}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              900: { slidesPerView: 2, spaceBetween: 22 },
              1200: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {slides}
          </Swiper>

          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-arrow"
              aria-label="Previous project"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              ‹
            </button>

            <div className="carousel-dots">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to project ${index + 1}`}
                  aria-current={index === activeIndex}
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow"
              aria-label="Next project"
              onClick={() => swiperRef.current?.slideNext()}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
