import styles from "./page.module.css";

const metrics = [
  { value: "48h", label: "to first qualified shortlist" },
  { value: "3x", label: "faster screening for hard-to-fill roles" },
  { value: "100%", label: "built for fabrication-first hiring teams" },
];

const steps = [
  {
    title: "Capture the real role",
    description:
      "Translate floor-level needs into a clear scorecard for welders, machinists, inspectors, and operators.",
  },
  {
    title: "Screen for actual fit",
    description:
      "Prioritize experience, certifications, shift flexibility, and shop readiness instead of generic resumes.",
  },
  {
    title: "Move the right people fast",
    description:
      "Keep leads warm, schedule next steps quickly, and give managers a clean view of who is ready now.",
  },
];

const useCases = [
  "High-mix fabrication teams hiring under delivery pressure",
  "Aerospace suppliers staffing weld, machine, and quality roles",
  "Operations leaders tired of losing candidates in email threads",
  "Small recruiting teams covering multiple specialized openings",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>JEEVY FABRICATION</p>
          <h1>Build the team behind the parts that cannot miss.</h1>
          <p className={styles.lede}>
            Jeevy is a hiring system for aerospace and fabrication teams that
            need qualified people on the floor, not another generic recruiting
            dashboard.
          </p>
          <div className={styles.heroActions}>
            <a href="mailto:hello@jeevy.co" className={styles.primaryAction}>
              Book a demo
            </a>
            <a href="#workflow" className={styles.secondaryAction}>
              See the workflow
            </a>
          </div>
          <div className={styles.metricGrid}>
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metricCard}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroPanel} aria-label="Jeevy hiring workflow">
          <div className={styles.panelHeader}>
            <span>Live pipeline</span>
            <span>Weld Shop Hiring System</span>
          </div>

          <div className={styles.pipelineBoard}>
            <div className={styles.pipelineColumn}>
              <h2>Sourced</h2>
              <article className={styles.candidateCard}>
                <strong>GTAW Welder</strong>
                <span>NADCAP environment</span>
                <small>7 years titanium + Inconel</small>
              </article>
              <article className={styles.candidateCard}>
                <strong>CNC Machinist</strong>
                <span>5-axis aerospace parts</span>
                <small>Night shift available</small>
              </article>
            </div>

            <div className={styles.pipelineColumn}>
              <h2>Qualified</h2>
              <article className={styles.candidateCard}>
                <strong>Quality Inspector</strong>
                <span>AS9100 + first article</span>
                <small>Ready this week</small>
              </article>
            </div>

            <div className={styles.pipelineColumnAccent}>
              <h2>Interviewing</h2>
              <div className={styles.scoreCard}>
                <p>Role Fit</p>
                <strong>92%</strong>
                <span>Blueprint reading, cert history, shop fit</span>
              </div>
              <div className={styles.timelineNote}>
                <span>Next action</span>
                <strong>Manager review at 2:00 PM</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Why Jeevy</p>
          <h2>Made for the way fabrication teams actually hire.</h2>
        </div>
        <div className={styles.featureGrid}>
          <article className={styles.featureCard}>
            <h3>Role-specific screening</h3>
            <p>
              Separate signal from noise with workflows built around certs,
              tolerances, materials, and production reality.
            </p>
          </article>
          <article className={styles.featureCard}>
            <h3>Faster coordinator handoff</h3>
            <p>
              Keep recruiting, operations, and hiring managers aligned without
              drowning everyone in spreadsheets and follow-up messages.
            </p>
          </article>
          <article className={styles.featureCard}>
            <h3>Cleaner decision trails</h3>
            <p>
              Know why a candidate is advancing, what is missing, and what
              happens next at every stage of the process.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section} id="workflow">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Workflow</p>
          <h2>A simpler path from requisition to ready-to-start.</h2>
        </div>
        <div className={styles.stepGrid}>
          {steps.map((step, index) => (
            <article key={step.title} className={styles.stepCard}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Best Fit</p>
          <h2>Especially useful for specialized teams with no room for hiring drag.</h2>
        </div>
        <div className={styles.useCaseList}>
          {useCases.map((item) => (
            <div key={item} className={styles.useCaseItem}>
              <span className={styles.useCaseDot} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div>
          <p className={styles.kicker}>Ready to See It</p>
          <h2>Jeevy helps hard-to-staff teams move with less friction.</h2>
        </div>
        <a href="mailto:hello@jeevy.co" className={styles.primaryAction}>
          Talk with Jeevy
        </a>
      </section>
    </main>
  );
}
