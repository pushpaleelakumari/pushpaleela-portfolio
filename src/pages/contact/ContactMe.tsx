import { useState, type SubmitEvent } from "react"

function ContactMe() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [note, setNote] = useState("")
  const [noteColor, setNoteColor] = useState("")

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const n = name.trim()
    const em = email.trim()
    const ms = message.trim()

    if (!n || !em || !ms) {
      setNote("› Fill every field before launch.")
      setNoteColor("#ffab4d")
      return
    }

    const body = encodeURIComponent(`${ms}\n\n— ${n} (${em})`)
    const subject = encodeURIComponent(`Portfolio transmission from ${n}`)
    setNote("› Opening your mail client…")
    setNoteColor("#7ff0d0")
    window.location.href = `mailto:pushpaleelakumari@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="reveal-section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="num mono">04 / CONTACT</div>
            <h2>Open a channel</h2>
          </div>
          <p className="sub">Available for senior frontend / React &amp; MERN roles — India, remote, or the Gulf.</p>
        </div>

        <div className="contact">
          <div className="reveal">
            <div className="lead">
              Let's build something that <span className="g">bends the rules of gravity.</span>
            </div>
            <p>Whether it's a product from scratch or scaling an existing UI, I'd love to hear about it.</p>
            <div className="links">
              <a className="linkrow" href="mailto:pushpaleelakumari@gmail.com">
                <span className="ic" aria-hidden="true">✉</span>
                <span>
                  <span className="k">Email</span>
                  <br />
                  <span className="v">pushpaleelakumari@gmail.com</span>
                </span>
              </a>
              <a className="linkrow" href="tel:+916300625067">
                <span className="ic" aria-hidden="true">☎</span>
                <span>
                  <span className="k">Phone</span>
                  <br />
                  <span className="v">+91 63006 25067</span>
                </span>
              </a>
              <a
                className="linkrow"
                href="https://www.linkedin.com/in/pushpa-leela-kumari-divvela-878844432/"
                target="_blank"
                rel="noopener"
              >
                <span className="ic" aria-hidden="true">in</span>
                <span>
                  <span className="k">LinkedIn</span>
                  <br />
                  <span className="v">pushpa-leela-kumari-divvela</span>
                </span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="cname">Your name</label>
              <input
                id="cname"
                name="name"
                type="text"
                placeholder="Commander…"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="cemail">Email</label>
              <input
                id="cemail"
                name="email"
                type="email"
                placeholder="you@station.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="cmsg">Transmission</label>
              <textarea
                id="cmsg"
                name="message"
                rows={4}
                placeholder="Tell me about the mission…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="btn primary" type="submit">
              Send transmission &rarr;
            </button>
            <div className="formnote mono" role="status" aria-live="polite" style={{ color: noteColor }}>
              {note}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
