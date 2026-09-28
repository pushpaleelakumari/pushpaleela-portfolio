import { Helmet } from "react-helmet-async"
import EclipseGraphic from "../../components/layouts/EclipseGraphic"
import About from "../about/About"
import Projects from "../projects/Projects"
import Experience from "../experience/Experience"
import ContactMe from "../contact/ContactMe"
import { useScrollReveal } from "../hooks/useScrollReveal"

function Home() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Pushpa Leela Kumari | Senior Frontend Engineer — React · Next.js · MERN</title>
        <meta
          name="description"
          content="Pushpa Leela Kumari is a Senior Software Engineer & Frontend Team Lead building fast, production-grade web experiences with React, Next.js and the MERN stack across trading, pharma and e-commerce platforms."
        />
        <meta
          name="keywords"
          content="Pushpa Leela Kumari, Frontend Engineer, React Developer, Next.js Developer, MERN Stack Developer, Senior Software Engineer, Frontend Team Lead"
        />
        <meta name="author" content="Pushpa Leela Kumari" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pushpaleelakumari.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pushpa Leela Kumari | Senior Frontend Engineer — React · Next.js · MERN" />
        <meta
          property="og:description"
          content="Senior Software Engineer & Frontend Team Lead building fast, production-grade web experiences with React, Next.js and the MERN stack."
        />
        <meta property="og:url" content="https://pushpaleelakumari.dev/" />
        <meta property="og:image" content="https://pushpaleelakumari.dev/favicon.svg" />
        <meta property="og:site_name" content="Pushpa Leela Kumari" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pushpa Leela Kumari",
            jobTitle: "Senior Software Engineer · Frontend Team Lead",
            url: "https://pushpaleelakumari.dev/",
            email: "mailto:pushpaleelakumari@gmail.com",
            telephone: "+91-63006-25067",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressCountry: "IN",
            },
            knowsAbout: ["React.js", "Next.js", "Redux", "MERN Stack", "TypeScript", "GraphQL", "Node.js"],
            sameAs: ["https://www.linkedin.com/in/pushpa-leela-kumari-divvela-878844432/"],
          })}
        </script>
      </Helmet>

      <section className="hero" id="home">
        <EclipseGraphic />
        <div className="wrap">
          <span className="eyebrow">Frontend Engineer · MERN · React</span>
          <h1>
            Bending the web
            <br />
            around gravity.
          </h1>
          <div className="role">Pushpa Leela Kumari — Senior Software Engineer & Frontend Team Lead</div>
          <p className="lede">
            I build fast, cinematic, production-grade web experiences with React, Next.js and the MERN stack — from
            global trading platforms to pharma commerce. 3+ years turning complex systems into interfaces that feel
            weightless.
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">
              View Projects &rarr;
            </a>
            <a className="btn ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="coords mono">
            <div>
              ◍ <b>Hyderabad, IN</b> · open to Remote / Gulf
            </div>
            <div>
              ◐ <b>4</b> companies
            </div>
            <div>
              ✦ <b>10+</b> shipped products
            </div>
          </div>
        </div>
        <div className="scrollcue mono" aria-hidden="true">
          <span>SCROLL</span>
          <span className="line" />
        </div>
      </section>

      <About />
      <Projects />
      <Experience />
      <ContactMe />
    </>
  )
}

export default Home
