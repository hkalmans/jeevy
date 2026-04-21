import styles from "./page.module.css";

const metrics = [
  { value: "80%+", label: "less bid and scheduling time for in-network shops" },
  { value: "24/7", label: "client visibility into schedules, documents, and updates" },
  { value: "6", label: "core industrial workload categories on day one" },
];

const productCards = [
  {
    eyebrow: "01 / Fabrication Contractor",
    title: "AI-driven EPC for welded assemblies",
    description:
      "Jeevy connects complex weld jobs to best-fit shops, manages execution end-to-end, and gives customers higher QA rigor and schedule transparency without the normal outsourcing chaos.",
    bullets: [
      "Best-fit shop allocation",
      "Purchasing and project coordination",
      "Customer-facing schedule visibility",
    ],
  },
  {
    eyebrow: "02 / Automation System",
    title: "A weld-shop operating layer",
    description:
      "The automation layer turns drawings into a bill of materials, resource-loaded schedules, documentation flows, and structured shop execution data that teams can actually act on.",
    bullets: [
      "Drawing to BOM and schedule",
      "Documentation and traceability",
      "Operational signal from the floor",
    ],
  },
  {
    eyebrow: "03 / Reliability Stack",
    title: "Quality, safety, and schedule control",
    description:
      "Jeevy's public fabrication positioning emphasizes workmanship, QA, safety seriousness, and industrial delivery discipline for aerospace, defense, energy, and data center work.",
    bullets: [
      "High-fidelity scheduling",
      "Risk analysis and document tracking",
      "Quality and safety built into the process",
    ],
  },
];

const workloads = [
  "Aerospace piping and skid assemblies",
  "Custom engineered fabrications",
  "Tooling design and manufacturing support equipment",
  "Field fabrication and install",
  "Steel manufacturing",
  "Data center engineering and install",
];

const operatingModel = [
  {
    label: "Capture",
    detail:
      "Process one drawing into the schedule, test plan, QA flow, and commercial assumptions that smaller shops rarely have time to build consistently.",
  },
  {
    label: "Route",
    detail:
      "Match jobs to shops with the right capability and available capacity so throughput does not collapse under bid load or resourcing noise.",
  },
  {
    label: "Execute",
    detail:
      "Track milestones, material review, domestic content needs, and customer documentation from kickoff through final delivery.",
  },
  {
    label: "Verify",
    detail:
      "Use rigorous QA habits, inspection discipline, and routine operational controls to reduce delays, rework, and blind spots.",
  },
];

const proofPoints = [
  "Public site positioning emphasizes top-class workmanship for aerospace engineers and industrial innovators.",
  "YC copy frames the product as an AI-powered contractor for complex welded assemblies with total transparency.",
  "Fabrication capabilities span aerospace, defense, energy, field install, tooling, and data center engineering work.",
  "Quality language centers on minimizing downtime, reducing risk, and improving safety in aerospace fabrication.",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <iframe
            src="https://www.youtube.com/embed/yS6gCBurz88?autoplay=1&mute=1&controls=0&loop=1&playlist=yS6gCBurz88&playsinline=1&rel=0&modestbranding=1"
            title="Welder with sparks flying"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className={styles.heroScrim} />

        <div className={styles.heroTop}>
          <p className={styles.brand}>JEEVY</p>
          <nav className={styles.nav}>
            <a href="#product">Product</a>
            <a href="#workloads">Workloads</a>
            <a href="#system">System</a>
            <a href="#proof">Proof</a>
          </nav>
        </div>

        <div className={styles.heroBody}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AI FABRICATION CONTRACTOR / WELD SHOP SYSTEM</p>
            <h1>Industrial execution software for teams building welded hardware under real schedule pressure.</h1>
            <p className={styles.heroText}>
              Jeevy combines contractor-grade fabrication execution with automation for quoting, scheduling,
              documentation, QA, and shop coordination. The result is a system that helps aerospace and industrial
              teams buy, track, and deliver complex welded work with more reliability and less operational drag.
            </p>
            <div className={styles.heroActions}>
              <a href="mailto:jeevy@jeevyfabrication.com" className={styles.primaryAction}>
                Contact Jeevy
              </a>
              <a href="#product" className={styles.secondaryAction}>
                Read the system
              </a>
            </div>
          </div>

          <div className={styles.heroStack}>
            <div className={styles.statusPanel}>
              <p className={styles.panelLabel}>Current Positioning</p>
              <strong>Build team for aerospace engineers</strong>
              <span>
                AI-driven fabrication contractor + weld shop automation + industrial services capability under one
                operating model.
              </span>
            </div>

            <div className={styles.stackGrid}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.metricCard}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="product">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Product Description</p>
          <h2>Three public faces, one operating system.</h2>
          <p>
            This page synthesizes Jeevy Fabrication, Jeevy Automation, and YC's public company description into one
            tighter product story: software plus execution for critical welded work.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {productCards.map((card) => (
            <article key={card.title} className={styles.blackCard}>
              <p className={styles.cardEyebrow}>{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className={styles.bulletList}>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="workloads">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Workloads</p>
          <h2>Designed for the work already visible in Jeevy's fabrication footprint.</h2>
          <p>
            Public-facing fabrication capabilities point to a broad but coherent workload set: aerospace piping,
            engineered fabrications, tooling, field install, steel work, and data center projects.
          </p>
        </div>

        <div className={styles.workloadGrid}>
          {workloads.map((workload, index) => (
            <article key={workload} className={styles.workloadCard}>
              <span className={styles.workloadIndex}>0{index + 1}</span>
              <h3>{workload}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="system">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Operating System</p>
          <h2>From drawing intake to verified delivery.</h2>
          <p>
            YC's public description highlights where the real leverage comes from: converting manufacturing inputs into
            schedules, documentation, and execution decisions quickly enough to make small shops behave like
            higher-rigor operators.
          </p>
        </div>

        <div className={styles.systemGrid}>
          {operatingModel.map((item) => (
            <article key={item.label} className={styles.systemCard}>
              <p className={styles.cardEyebrow}>{item.label}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="proof">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Public Proof</p>
          <h2>What the current public material already says.</h2>
        </div>

        <div className={styles.proofPanel}>
          <div className={styles.proofColumn}>
            <h3>Why it matters</h3>
            <p>
              The consistent thread across the public material is reliability: higher workmanship, stronger QA,
              visibility into execution, and more disciplined schedule control for hard-to-source industrial jobs.
            </p>
          </div>
          <div className={styles.proofColumn}>
            <ul className={styles.bulletList}>
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <p className={styles.eyebrow}>Jeevy Fabrication / Jeevy Automation</p>
          <h2>Technological on the surface. Industrial at the core.</h2>
          <p>
            If the direction feels right, the next pass should be brand cleanup: final messaging, real contact flow,
            and a proper media asset instead of the temporary embedded hero video.
          </p>
          <a href="mailto:jeevy@jeevyfabrication.com" className={styles.primaryAction}>
            Talk with Jeevy
          </a>
        </div>
      </section>
    </main>
  );
}
