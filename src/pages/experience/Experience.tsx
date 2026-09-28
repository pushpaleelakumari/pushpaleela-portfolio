const JOBS = [
  {
    when: "DEC 2025 — PRESENT",
    title: "Senior Software Engineer · Frontend Team Lead",
    company: "Hiringhood Technologies",
    location: "Hyderabad, India · On-site",
    description:
      "Leading the frontend team while building across the full stack — architecture, code reviews, mentoring, and shipping React/Node features with MongoDB and Express.",
  },
  {
    when: "SEP 2025 — NOV 2025",
    title: "Software Engineer I",
    company: "Rebus Technologies",
    location: "Dubai, UAE · Remote",
    description:
      "Delivered frontend features for a Dubai-based product team, working remotely across time zones with React and modern tooling.",
  },
  {
    when: "JUL 2024 — JUN 2025",
    title: "Software Engineer I",
    company: "Tilicho Labs",
    location: "Visakhapatnam, India · On-site",
    description:
      "Worked across multiple projects on both frontend and backend — Node.js, Express and SQL — shipping end-to-end features.",
  },
  {
    when: "DEC 2022 — FEB 2024",
    title: "Software Engineer",
    company: "Neetable Technologies",
    location: "Bengaluru, India · On-site",
    description:
      "Built responsive, interactive web & UI apps across domains with HTML5, CSS3, JavaScript, ReactJS, AWS Amplify, GraphQL, Node & Express — with Material UI, Bootstrap, Tailwind and Redux architecture for performance.",
  },
]

function Experience() {
  return (
    <section id="experience" className="reveal-section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="num mono">03 / EXPERIENCE</div>
            <h2>Trajectory</h2>
          </div>
          <p className="sub">Four orbits, one direction — from React developer to frontend team lead.</p>
        </div>
        <div className="timeline">
          {JOBS.map((job) => (
            <div className="job reveal" key={job.when}>
              <span className="node" aria-hidden="true" />
              <div className="when">{job.when}</div>
              <h3>{job.title}</h3>
              <div className="co">
                {job.company} <span className="loc">· {job.location}</span>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
