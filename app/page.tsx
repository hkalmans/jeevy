import styles from "./page.module.css";

const heroStats = [
  { value: "80%+", label: "less bid and scheduling time for in-network shops" },
  { value: "24/7", label: "client visibility into schedules, documents, and updates" },
  { value: "6", label: "industrial workload categories already represented publicly" },
];

const offerings = [
  {
    id: "fabrication",
    label: "AI Fabrication Contractor",
    title: "Own the welded job from sourcing through delivery.",
    description:
      "Jeevy Fabrication acts as an AI-driven contractor for complex welded assemblies. It routes work to best-fit shops, coordinates purchasing and milestones, and gives clients a cleaner buying experience with schedules, documents, traceability, and updates in one place.",
    details: [
      "Best-fit shop allocation and scheduling",
      "Higher QA rigor with end-to-end ownership",
      "Project tracking, traceability, and material review",
    ],
    mediaTitle: "Fabrication execution",
    mediaBody:
      "Built to make outsourced welded work feel closer to an in-house program: visible, structured, and schedule-aware.",
    imageUrl: "https://jeevyfabrication.com/wp-content/uploads/2025/10/hp_manifold.webp",
    imageAlt: "Industrial manifold fabrication from Jeevy Fabrication",
  },
  {
    id: "automation",
    label: "Jeevy Automation",
    title: "Turn drawings into execution data that shops can actually use.",
    description:
      "The automation layer converts manufacturing drawings into an accurate bill of materials, a resource-loaded high-fidelity schedule, documentation flows, and operational structure. It is meant to reduce the hidden engineering burden that slows smaller weld shops down.",
    details: [
      "Drawing to BOM and high-fidelity schedule",
      "Documentation and shop coordination flows",
      "Fewer errors, less rework, better throughput",
    ],
    mediaTitle: "Automation system",
    mediaBody:
      "Less spreadsheet glue. More real production signal. Better scheduling, cleaner handoffs, and fewer misses.",
    imageUrl: "https://jeevyfabrication.com/wp-content/uploads/2025/10/2-2-1024x576.jpg",
    imageAlt: "Welding and fabrication work in progress",
  },
  {
    id: "services",
    label: "Industrial Services",
    title: "Support high-stakes industrial programs with quality and safety discipline.",
    description:
      "Public Jeevy Fabrication materials emphasize top-class workmanship, quality focus, safety seriousness, and industrial support for aerospace, field install, steel manufacturing, tooling, and data center work. This is the credibility layer that makes the software story believable.",
    details: [
      "Quality-centered execution and QA policy alignment",
      "Safety treated seriously across the organization",
      "Capabilities spanning aerospace, energy, steel, and data center scopes",
    ],
    mediaTitle: "Industrial support",
    mediaBody:
      "Not just software theater. A delivery posture rooted in real welded hardware, project controls, and field execution.",
    imageUrl: "https://jeevyfabrication.com/wp-content/uploads/2025/10/jeevy-team.jpg",
    imageAlt: "Jeevy Fabrication team in the shop",
  },
];

const workloads = [
  {
    icon: "🔧",
    title: "Aerospace Piping and Skid Assemblies",
    description: "High-consequence piping, fluid systems, and skid builds where cleanliness, spec discipline, and schedule rigor matter.",
  },
  {
    icon: "⚙️",
    title: "Custom Engineered Fabrications",
    description: "One-off or specialized fabrications that need stronger coordination than generic job-shop quoting usually provides.",
  },
  {
    icon: "📐",
    title: "Tooling Design",
    description: "Manufacturing support equipment and purpose-built tooling for teams trying to move faster without losing control.",
  },
  {
    icon: "🏗️",
    title: "Field Fabrication and Install",
    description: "Execution support for on-site industrial work where documentation, sequencing, and communication become critical.",
  },
  {
    icon: "🔩",
    title: "Steel Manufacturing",
    description: "Heavier industrial steel work that benefits from better planning, workload visibility, and structured delivery management.",
  },
  {
    icon: "🖥️",
    title: "Data Center Engineering & Install",
    description: "Fast-moving infrastructure scopes where schedule clarity and reliable fabrication partners matter materially.",
  },
];

const fabricationFacts = [
  "Reshaping the Future of Industrial Innovation",
  "Top-class workmanship to support engineers and the technologies they innovate",
  "Quality is defined as delivering precisely what the client desires",
  "Safety is treated with the utmost seriousness across the organization",
  "Committed to environmental responsibilities focused on local communities and the globe alike",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroVideo} aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.backgroundVideo}
          >
            <source src="/welding-sparks.mp4" type="video/mp4" />
            <source src="/welding-sparks.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />

        <header className={styles.heroTop}>
          <p className={styles.brand}>JEEVY SYSTEMS</p>
          <nav className={styles.nav}>
            <a href="#product">Product</a>
            <a href="#workloads">Workloads</a>
            <a href="#fabrication-data">Fabrication</a>
            <a href="mailto:jeevy@jeevyfabrication.com">Contact</a>
          </nav>
        </header>

        <div className={styles.heroCenter}>
          <div className={styles.logoLockup}>
            <div className={styles.logoMark}>
              <span>J</span>
            </div>
            <div className={styles.logoText}>
              <strong>JEEVY</strong>
              <span>SYSTEMS</span>
            </div>
          </div>

          <p className={styles.tagline}>Welding Execution Software on Your Timeline</p>

          <div className={styles.heroButtons}>
            <a href="#product" className={styles.primaryButton}>
              Explore Products
            </a>
            <a href="#fabrication-data" className={styles.secondaryButton}>
              See Fabrication Capabilities
            </a>
          </div>

          <div className={styles.heroStats}>
            {heroStats.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="product">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Product Description</p>
          <h2>Three offers. One industrial operating layer.</h2>
          <p>
            The goal is not just to look technical. It is to sell a believable industrial system: contractor execution,
            weld-shop automation, and services capability tied together into one clearer buying story.
          </p>
        </div>

        <div className={styles.offeringsLayout}>
          <aside className={styles.offeringsRail}>
            {offerings.map((offering, index) => (
              <a key={offering.id} href={`#${offering.id}`} className={styles.offeringButton}>
                <span className={styles.offeringIndex}>0{index + 1}</span>
                <span>{offering.label}</span>
              </a>
            ))}
          </aside>

          <div className={styles.offeringsContent}>
            {offerings.map((offering) => (
              <article key={offering.id} id={offering.id} className={styles.offeringCard}>
                <div className={styles.offeringText}>
                  <p className={styles.cardKicker}>{offering.label}</p>
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                  <ul className={styles.detailList}>
                    {offering.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.offeringMedia}>
                  <img src={offering.imageUrl} alt={offering.imageAlt} className={styles.offeringImage} />
                  <div className={styles.mediaGlow} />
                  <div className={styles.mediaPanel}>
                    <p className={styles.cardKicker}>{offering.mediaTitle}</p>
                    <p>{offering.mediaBody}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="workloads">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Workloads</p>
          <h2>Industrial scopes the product is already positioned to support.</h2>
        </div>

        <div className={styles.workloadGrid}>
          {workloads.map((workload) => (
            <article key={workload.title} className={styles.workloadCard}>
              <div className={styles.workloadIcon}>{workload.icon}</div>
              <h3>{workload.title}</h3>
              <p>{workload.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.motionBand}>
          <div className={styles.motionVideo} aria-hidden="true">
            <iframe
              src="https://www.youtube.com/embed/yS6gCBurz88?autoplay=1&mute=1&controls=0&loop=1&playlist=yS6gCBurz88&playsinline=1&rel=0&modestbranding=1"
              title="Welding sparks motion background"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className={styles.motionShade} />
          <div className={styles.motionText}>
            <p className={styles.kicker}>Execution Layer</p>
            <h2>More patient pacing. More proof. More visual action.</h2>
            <p>
              The revised structure slows the reader down in the right way: centered identity first, then products,
              then workloads, then the underlying fabrication business that makes the system credible.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="fabrication-data">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Jeevy Fabrication</p>
          <h2>Public fabrication information from the current Jeevy site.</h2>
          <p>
            This section intentionally mirrors the live fabrication business more directly: industrial innovation,
            service capabilities, quality focus, safety seriousness, and contact details.
          </p>
        </div>

        <div className={styles.fabricationGrid}>
          <article className={styles.fabricationCard}>
            <h3>What the site says</h3>
            <ul className={styles.detailList}>
              {fabricationFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </article>

          <article className={styles.fabricationCard}>
            <h3>Service Capabilities</h3>
            <ul className={styles.detailList}>
              <li>Aerospace piping and skid assemblies</li>
              <li>Custom engineered fabrications</li>
              <li>Tooling design</li>
              <li>Field fabrication and install</li>
              <li>Steel manufacturing</li>
              <li>Data center engineering and install</li>
            </ul>
          </article>

          <article className={styles.fabricationCard}>
            <h3>Find Us</h3>
            <div className={styles.contactBlock}>
              <p>4505 County Road 312B</p>
              <p>Cleburne, TX 76031</p>
              <p>682-317-9998</p>
              <p>jeevy@jeevyfabrication.com</p>
            </div>
            <a href="mailto:jeevy@jeevyfabrication.com" className={styles.primaryButton}>
              Contact Jeevy
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
