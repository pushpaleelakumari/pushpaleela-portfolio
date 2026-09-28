function About() {
  return (
    <section id="about" className="reveal-section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="num mono">01 / ABOUT</div>
            <h2>Signal from the observer</h2>
          </div>
          <p className="sub">
            A frontend-focused full-stack developer who leads by shipping — obsessed with performance, motion and
            clean architecture.
          </p>
        </div>

        <div className="about">
          <div className="reveal">
            <p>
              <span className="hi">I'm Pushpa</span> — a React / MERN developer with 3+ years building responsive,
              high-performance web and UI applications across trading, pharma, real-estate and healthcare domains.
            </p>
            <p>
              Currently I lead the frontend team at <b style={{ color: "#fff" }}>Hiringhood</b> in Hyderabad while
              working across the full stack. I've engineered SSR/CSR apps in Next.js, wired GraphQL & REST layers,
              tuned Redux/Redux-Saga state, and squeezed real speed out of large UIs — including zero-cost SEO with
              React SSG.
            </p>
            <p>
              I care about the details between the frames: micro-interactions, load orchestration, and interfaces
              that stay calm under heavy data.
            </p>

            <div className="skills">
              <div className="skillrow">
                <div className="k">Frontend</div>
                <div className="chips">
                  <span className="chip">React.js</span>
                  <span className="chip">Next.js</span>
                  <span className="chip">Redux / Toolkit</span>
                  <span className="chip">Redux-Saga</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">JavaScript</span>
                  <span className="chip">React Query</span>
                  <span className="chip">MUI</span>
                  <span className="chip">Tailwind</span>
                  <span className="chip">Bootstrap</span>
                  <span className="chip">Micro-Frontend</span>
                  <span className="chip">HTML5 / CSS3</span>
                </div>
              </div>
              <div className="skillrow">
                <div className="k">Backend</div>
                <div className="chips">
                  <span className="chip">Node.js</span>
                  <span className="chip">Express.js</span>
                  <span className="chip">MongoDB</span>
                  <span className="chip">SQL</span>
                  <span className="chip">GraphQL</span>
                  <span className="chip">REST APIs</span>
                </div>
              </div>
              <div className="skillrow">
                <div className="k">Cloud / Tools</div>
                <div className="chips">
                  <span className="chip">AWS Amplify</span>
                  <span className="chip">AWS IAM</span>
                  <span className="chip">S3</span>
                  <span className="chip">Git · BitBucket</span>
                  <span className="chip">Jira</span>
                  <span className="chip">DevOps</span>
                </div>
              </div>
              <div className="skillrow">
                <div className="k">AI Stack</div>
                <div className="chips">
                  <span className="chip">Cursor</span>
                  <span className="chip">GitHub Copilot</span>
                  <span className="chip">Claude</span>
                  <span className="chip">Windsurf</span>
                </div>
              </div>
            </div>
          </div>

          <div className="portrait reveal" aria-label="Orbiting monogram planet">
            <svg viewBox="0 0 400 400" role="img" aria-label="Stylised planet with the monogram P L K">
              <defs>
                <radialGradient id="pl" cx="42%" cy="38%" r="75%">
                  <stop offset="0%" stopColor="#2a1b3d" />
                  <stop offset="45%" stopColor="#160f26" />
                  <stop offset="100%" stopColor="#070510" />
                </radialGradient>
                <radialGradient id="glo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(140,190,255,.35)" />
                  <stop offset="70%" stopColor="rgba(90,150,255,0)" />
                </radialGradient>
                <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#dcefff" />
                  <stop offset="50%" stopColor="#5fa8f2" />
                  <stop offset="100%" stopColor="#a98bff" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#glo)" />
              {/* back half of the ring — passes behind the sphere */}
              <g transform="rotate(-24 200 200)" opacity=".55">
                <path d="M 24 200 A 176 52 0 0 0 376 200" fill="none" stroke="url(#ring)" strokeWidth="6" />
                <path d="M 24 200 A 176 52 0 0 0 376 200" fill="none" stroke="rgba(127,178,255,.35)" strokeWidth="1.5" />
              </g>
              <circle cx="200" cy="200" r="118" fill="url(#pl)" stroke="rgba(140,190,255,.35)" strokeWidth="1.5" />
              {/* front half of the ring — passes in front of the sphere */}
              <g transform="rotate(-24 200 200)">
                <path d="M 24 200 A 176 52 0 0 1 376 200" fill="none" stroke="url(#ring)" strokeWidth="7" />
                <path d="M 24 200 A 176 52 0 0 1 376 200" fill="none" stroke="rgba(220,239,255,.4)" strokeWidth="1.5" />
              </g>
              <circle cx="150" cy="150" r="16" fill="rgba(255,255,255,.05)" />
              <circle cx="245" cy="235" r="26" fill="rgba(0,0,0,.35)" />
              <circle cx="168" cy="235" r="10" fill="rgba(169,139,255,.18)" />
              <text
                x="200"
                y="214"
                textAnchor="middle"
                fontFamily="Sora, sans-serif"
                fontWeight="800"
                fontSize="58"
                fill="#fff"
                opacity=".92"
                letterSpacing="2"
              >
                PLK
              </text>
              <g fill="#fff">
                <circle cx="70" cy="90" r="1.6" opacity=".8" />
                <circle cx="330" cy="120" r="1.3" opacity=".6" />
                <circle cx="315" cy="300" r="1.7" opacity=".7" />
                <circle cx="90" cy="310" r="1.2" opacity=".6" />
                <circle cx="360" cy="210" r="1.4" opacity=".7" />
              </g>
            </svg>
          </div>
        </div>

        <div className="stats">
          <div className="stat reveal">
            <div className="n">3+</div>
            <div className="l">Years shipping</div>
          </div>
          <div className="stat reveal">
            <div className="n">10+</div>
            <div className="l">Products delivered</div>
          </div>
          <div className="stat reveal">
            <div className="n">60+</div>
            <div className="l">Pages built on WorldTradeX</div>
          </div>
          <div className="stat reveal">
            {/* Updated per Pushpa: actual real-time chat engagement lift measured 40-50%, not the earlier 15% estimate. */}
            <div className="n">40–50%</div>
            <div className="l">Engagement lift (real-time chat)</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
