import { useState, useEffect } from 'react';
import './App.css';

const GITHUB_USER = 'Futurater';
const EMAIL_ADDRESS = 'santoshpallavi107@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sagar-varma-760553297/';
const GITHUB_URL = 'https://github.com/Futurater';

const SI = 'https://cdn.simpleicons.org';

const PROJECTS = [
  {
    id: 'vantage',
    title: 'Vantage — Trading Platform & AI Advisor',
    category: 'FinTech & AI',
    theme: 'theme-purple',
    badge: '⚡ EARLY RELEASE',
    badgeClass: 'green',
    icon: '📈',
    subtitle: 'Real-time market simulator with Google Gemini AI intelligence',
    synopsis: 'A microservices-driven trading ecosystem featuring real-time market simulations, portfolio position management, and an autonomous AI market sentiment analyst powered by Google Gemini API.',
    points: [
      'Engineered a microservices architecture using React, Node.js, and Python with persistent state management in MongoDB.',
      'Developed a standalone AI Stock Advisor microservice in Python utilizing the Google Gemini API to analyze market sentiment and synthesize instant buy/hold/sell rationale.',
      'Constructed high-throughput REST APIs in Express to track user holdings, order executions, and simulated market pricing with low latency.',
      'Packaged and containerized services with Docker for standardized local orchestration and cloud deployment.',
    ],
    tech: ['React', 'Node.js', 'Python', 'Express', 'MongoDB', 'Gemini API', 'Docker'],
    demo: 'https://vantage-frontend-t5cy.onrender.com',
    github: 'https://github.com/Futurater/vantage',
  },
  {
    id: 'staynest',
    title: 'StayNest — Rental Platform & AI Assistant',
    category: 'Real Estate & Travel',
    theme: 'theme-terracotta',
    badge: '🌟 FEATURED DROP',
    badgeClass: 'yellow',
    icon: '🏡',
    subtitle: 'Full-stack property rental network with Gemini 2.5 Flash Lite assistant',
    synopsis: 'A comprehensive rental management application featuring secure authentication, multi-image Cloudinary media workflows, category curation, and a context-aware floating AI concierge.',
    points: [
      'Engineered a robust property booking engine using Node.js, Express.js, and MongoDB Atlas with encrypted session handling via Passport.js.',
      'Integrated Google Gemini 2.5 Flash Lite API to power a real-time conversational concierge guiding users to their ideal rental accommodations.',
      'Built multi-file cloud image pipelines with Cloudinary API and multer, including automatic transformations and CDN delivery.',
      'Designed responsive server-rendered views with dynamic client enhancements deployed on Vercel.',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Passport.js', 'Cloudinary', 'Gemini API', 'Bootstrap', 'Vercel'],
    demo: 'https://staynest-rouge.vercel.app/listings',
    github: 'https://github.com/Futurater/staynest',
  },
  {
    id: 'unshell',
    title: 'Unshell // Forensic Intelligence & AML',
    category: 'Forensic & Cyber',
    theme: 'theme-lime',
    badge: '🏆 HACKATHON WINNER',
    badgeClass: 'magenta',
    icon: '🛡️',
    subtitle: 'Automated document processing & risk analysis engine (Hackfest 2nd Runner-Up)',
    synopsis: 'National hackathon award-winning platform that automates forensic document validation, entity verification, and forensic risk classification for AML/KYB compliance.',
    points: [
      'Awarded 2nd Runner-Up out of top teams at Hackfest (NMAMIT 36-hour National Level Hackathon).',
      'Developed automated document extraction and cross-verification pipelines detecting forged data points and corporate shell networks.',
      'Architected reactive analytical dashboards for compliance auditors to inspect high-risk entities with explainable AI markers.',
      'Engineered high-concurrency ingestion handlers ensuring rapid processing of regulatory documents.',
    ],
    tech: ['React', 'Node.js', 'Python', 'Document AI', 'Risk Scoring', 'REST APIs'],
    demo: 'https://github.com/Futurater',
    github: 'https://github.com/Futurater',
  },
];

const SKILLS = {
  Languages: [
    { name: 'JavaScript', icon: `${SI}/javascript` },
    { name: 'Python',     icon: `${SI}/python` },
    { name: 'Java',       icon: `${SI}/java/f89820` },
    { name: 'HTML5',      icon: `${SI}/html5` },
    { name: 'CSS3',       icon: `${SI}/css3` },
  ],
  Frontend: [
    { name: 'React 19',    icon: `${SI}/react/61dafb` },
    { name: 'TailwindCSS', icon: `${SI}/tailwindcss` },
    { name: 'Bootstrap',   icon: `${SI}/bootstrap` },
    { name: 'Responsive UI', icon: null },
  ],
  Backend: [
    { name: 'Node.js',    icon: `${SI}/nodedotjs` },
    { name: 'Express.js', icon: `${SI}/express/000000` },
    { name: 'Mongoose',   icon: `${SI}/mongoose` },
    { name: 'REST APIs',  icon: null },
    { name: 'Microservices', icon: null },
  ],
  'Databases & Cloud': [
    { name: 'MongoDB',    icon: `${SI}/mongodb` },
    { name: 'MySQL',      icon: `${SI}/mysql/4479a1` },
    { name: 'Docker',     icon: `${SI}/docker/2496ed` },
    { name: 'Vercel',     icon: `${SI}/vercel/000000` },
    { name: 'Render',     icon: `${SI}/render/46e3b7` },
    { name: 'Git',        icon: `${SI}/git` },
  ],
  'AI & Modern Tech': [
    { name: 'Gemini API', icon: `${SI}/googlegemini/8E75B2` },
    { name: 'Postman',    icon: `${SI}/postman` },
    { name: 'Passport.js', icon: null },
    { name: 'Cloudinary', icon: `${SI}/cloudinary` },
    { name: 'DSA & Algorithms', icon: null },
  ],
};

const PROCESS_STEPS = [
  {
    step: 'Step #1',
    title: 'Architecture & System Design',
    icon: '📐',
    desc: 'Modeling clean database schemas, decoupling microservices, and planning resilient REST APIs that scale predictably under load.',
  },
  {
    step: 'Step #2',
    title: 'Tactile & Fluid Frontend',
    icon: '✨',
    desc: 'Crafting responsive, editorial-grade interfaces with modern React, punchy typography, tactile buttons, and zero-jank micro-interactions.',
  },
  {
    step: 'Step #3',
    title: 'AI & Autonomous Logic',
    icon: '🤖',
    desc: 'Integrating Google Gemini LLMs and intelligent agentic workflows to transform static dashboards into context-aware digital advisors.',
  },
  {
    step: 'Step #4',
    title: 'Ship, Containerize & Scale',
    icon: '🚀',
    desc: 'Containerizing with Docker, configuring continuous cloud deployments across Vercel & Render, and tuning performance for real users.',
  },
];

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ['All', 'FinTech & AI', 'Real Estate & Travel', 'Forensic & Cyber'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* FLOATING CAPSULE NAVBAR */}
      <header className="header">
        <div className="header__inner">
          <a href="#hero" className="header__logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <span className="header__logo-badge">📚</span>
            <span>SAGAR VARMA</span>
          </a>

          <nav className="header__nav">
            <button className="nav-link" onClick={() => scrollToSection('projects')}>Featured Projects</button>
            <button className="nav-link" onClick={() => scrollToSection('process')}>How I Build</button>
            <button className="nav-link" onClick={() => scrollToSection('stack')}>Tech Stash</button>
            <button className="nav-link" onClick={() => scrollToSection('achievements')}>Hall of Fame</button>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="button-alt is--magenta">
              <span className="button-alt__text-wrap">Let's Connect</span>
              <span className="button-alt__icon-wrap">
                <svg className="button-alt__icon" viewBox="0 0 14 13" fill="none">
                  <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"></path>
                </svg>
              </span>
            </a>

            <div className="header__social-group">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="button-social" title="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="button-social" title="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>

            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <button onClick={() => scrollToSection('projects')}>Featured Projects 📚</button>
          <button onClick={() => scrollToSection('process')}>How I Build 🛠️</button>
          <button onClick={() => scrollToSection('stack')}>Tech Stash ⚡</button>
          <button onClick={() => scrollToSection('achievements')}>Hall of Fame 🏆</button>
          <button onClick={() => scrollToSection('contact')}>Get In Touch 🤝</button>
        </div>
      )}

      {/* HERO SECTION (Sunny Yellow Editorial Wave) */}
      <section id="hero" className="hero">
        <svg className="hero__bg-wave" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,122.7C672,117,768,171,864,202.7C960,235,1056,245,1152,218.7C1248,192,1344,128,1392,96L1440,64L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z" fill="#F4C938"></path>
        </svg>

        <div className="u-container">
          <div className="hero__grid">
            {/* Left Content */}
            <div className="hero__content">
              <div className="hero__pill-tag">
                <span className="pulse-dot"></span>
                <span>OPEN FOR ROLES &amp; COLLABORATIONS</span>
              </div>

              <h1 className="hero__title">
                Building digital products worth talking about.
              </h1>

              <p className="hero__bio">
                Hey, I’m <strong>Sagar Varma</strong> — a full-stack engineer and AI builder specializing in React, Node.js, Python, and intelligent web applications. Turning ambitious concepts into fast, fluid, collectible software. Currently pursuing B.E. CSE at Sir MVIT, Bengaluru.
              </p>

              <div className="hero__actions-wrap">
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="button-primary-big">
                  <span className="button-primary-big__text">Explore My Drops</span>
                  <span className="button-primary-big__icon">→</span>
                </a>

                <button onClick={handleCopyEmail} className="button-secondary-big">
                  <span>✉️ {copiedEmail ? 'Copied to Clipboard! 🎉' : 'santoshpallavi107@gmail.com'}</span>
                </button>
              </div>

              <div className="handwritten-annotation">
                <span>✦</span>
                <span>Hand-crafted code, real-time engines &amp; zero boring templates</span>
              </div>
            </div>

            {/* Right Collectible Visual (Developer Jacket Card) */}
            <div className="hero__visual-container">
              <div className="developer-card-frame">
                {/* Sticker Badges */}
                <div className="sticker-badge top-left">
                  <span>🚀</span> MERN + Python AI
                </div>
                <div className="sticker-badge center-right">
                  <span>📍</span> Bengaluru, IN
                </div>
                <div className="sticker-badge bottom-right">
                  <span>🏆</span> Hackfest Finalist
                </div>

                <div className="developer-card-frame__photo-wrap">
                  <img src="/profile.png" alt="Sagar Varma" className="developer-card-frame__photo" />
                </div>

                <div className="developer-card-frame__bottom">
                  <div>
                    <div className="developer-card-frame__name">C A Sagar Varma</div>
                    <div className="developer-card-frame__role">Full-Stack Engineer · AI Builder</div>
                  </div>
                  <div style={{ fontSize: '1.6rem' }}>💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BANNER TAPE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[1, 2].map((k) => (
            <div key={k} style={{ display: 'flex' }}>
              <div className="marquee-item">
                <span>FULL-STACK ENGINEERING</span>
                <span className="star-glyph">★</span>
                <span>REACT 19</span>
                <span className="star-glyph">★</span>
                <span>GOOGLE GEMINI LLM</span>
                <span className="star-glyph">★</span>
                <span>NODE.JS &amp; EXPRESSED APIS</span>
                <span className="star-glyph">★</span>
                <span>PYTHON MICROSERVICES</span>
                <span className="star-glyph">★</span>
                <span>MONGODB PERSISTENCE</span>
                <span className="star-glyph">★</span>
                <span>DOCKER CONTAINERIZATION</span>
                <span className="star-glyph">★</span>
                <span>COLLECTIBLE UI DESIGN</span>
                <span className="star-glyph">★</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* "PROJECT DROPS" SECTION (Aardvark Hardcover Books Style) */}
      <section id="projects" className="project-drops">
        <div className="u-container">
          <div className="section-header-block">
            <span className="section-header__subtitle">Discover hidden gems &amp; full-stack releases</span>
            <h2 className="section-header__title">Featured Project Drops</h2>
            <p className="section-header__desc">
              Carefully curated, end-to-end full-stack applications with real-time backends and generative AI integrations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${selectedFilter === cat ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="cards-grid">
            {filteredProjects.map((p) => (
              <article key={p.id} className={`book-card ${p.theme}`}>
                {/* Decorative ear tabs */}
                <div className="book-card__ears">
                  <div className="book-card__ear"></div>
                  <div className="book-card__ear"></div>
                </div>

                {/* Card Jacket */}
                <div className="book-card__jacket">
                  <div className="badge-neon green">{p.badge}</div>

                  <div className="book-card__artwork">
                    <span className="book-card__emblem-icon">{p.icon}</span>
                  </div>

                  <div>
                    <h3 className="book-card__jacket-title">{p.title}</h3>
                    <div className="book-card__jacket-category">{p.category}</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="book-card__body">
                  <p className="book-card__synopsis">{p.synopsis}</p>

                  <div className="genre-pills">
                    {p.tech.map((t, idx) => (
                      <span key={t} className={`genre-pill ${idx === 0 ? 'highlight' : ''}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="book-card__actions">
                    <button
                      className="btn-card-action primary"
                      onClick={() => setActiveModalProject(p)}
                    >
                      📖 Read Case Study
                    </button>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-card-action secondary"
                      >
                        🔗 Live App
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-card-action secondary"
                      >
                        ⚡ GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* "HOW I BUILD" 4 TILTED CARDS (From Aardvark "How it works") */}
      <section id="process" className="process-section">
        <div className="u-container">
          <div className="section-header-block">
            <span className="section-header__subtitle" style={{ color: 'var(--purple-deep)' }}>
              Consider me your end-to-end product craftsman
            </span>
            <h2 className="section-header__title">How I Build Software</h2>
            <p className="section-header__desc" style={{ color: 'var(--purple-deep)' }}>
              From initial database architecture to tactile user interfaces and automated cloud deployments.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-card__step-num">{step.step}</div>
                <div className="step-card__icon">{step.icon}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "INSIDE THE TECH STACK" UNBOXING SECTION */}
      <section id="stack" className="tech-section">
        <div className="u-container">
          <div className="section-header-block">
            <span className="section-header__subtitle">Unbox the developer toolbelt</span>
            <h2 className="section-header__title">The Complete Tech Stash</h2>
            <p className="section-header__desc">
              Battle-tested technologies and modern frameworks I use to build scalable products.
            </p>
          </div>

          <div className="tech-categories-grid">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="tech-category-card">
                <div className="tech-category-card__header">
                  <h3 className="tech-category-card__title">{category}</h3>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--magenta-primary)' }}>
                    {items.length} TOOLS
                  </span>
                </div>

                <div className="tech-items-wrap">
                  {items.map((s) => (
                    <div key={s.name} className="tech-tag-badge">
                      {s.icon ? (
                        <img src={s.icon} alt={s.name} loading="lazy" />
                      ) : (
                        <span>✦</span>
                      )}
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "HALL OF FAME" ACHIEVEMENTS & CERTIFICATIONS */}
      <section id="achievements" className="hall-section">
        <div className="u-container">
          <div className="section-header-block">
            <span className="section-header__subtitle">Recognitions &amp; milestones</span>
            <h2 className="section-header__title">Hall of Fame</h2>
            <p className="section-header__desc">
              Competitive hackathon podium finishes and industry certifications.
            </p>
          </div>

          <div className="hall-grid">
            {/* Stamp Card for Hackfest */}
            <div className="stamp-card">
              <div className="stamp-card__badge-round">🥉</div>
              <div className="stamp-card__org">📍 NMAMIT · 36-Hour Hackathon</div>
              <h3 className="stamp-card__title">
                2nd Runner-Up — Hackfest (National Level Hackathon)
              </h3>
              <p className="stamp-card__desc">
                Secured 3rd place in a 36-hour intense national-level competition by developing an automated software solution for complex forensic document processing and risk analysis — recognized among top submissions for technical depth and real-world applicability.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span className="badge-neon green">NATIONAL PODIUM</span>
                <span className="badge-neon yellow">AML &amp; FORENSIC AI</span>
              </div>
            </div>

            {/* Certifications List */}
            <div className="certs-list">
              <div className="cert-pill-card">
                <div className="cert-pill-card__icon blue">💻</div>
                <div>
                  <div className="cert-pill-card__name">Full Stack Web Development</div>
                  <div className="cert-pill-card__issuer">Issued by Apna College · MERN Specialization</div>
                </div>
              </div>

              <div className="cert-pill-card">
                <div className="cert-pill-card__icon orange">☁️</div>
                <div>
                  <div className="cert-pill-card__name">Oracle Cloud AI Foundations Associate</div>
                  <div className="cert-pill-card__issuer">Issued by Oracle · Cloud Infrastructure &amp; AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONNECT SECTION */}
      <footer id="contact" className="footer">
        <div className="u-container">
          <div className="footer-block-container">
            <div>
              <h2 className="footer__title">
                Ready to unbox something great together?
              </h2>
              <p className="footer__desc">
                Whether you’re looking for a dedicated full-stack engineer, have an exciting project drop, or just want to talk system design and AI agents — my inbox is always open.
              </p>
            </div>

            <div className="footer-contact-actions">
              <button onClick={handleCopyEmail} className="copy-email-btn">
                <span>{EMAIL_ADDRESS}</span>
                <span className="copy-email-btn__badge">
                  {copiedEmail ? 'Copied! 🎉' : 'Click to Copy 📋'}
                </span>
              </button>

              <div className="footer-social-row">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="footer-social-pill">
                  <span>⚡ GitHub</span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="footer-social-pill">
                  <span>💼 LinkedIn</span>
                </a>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="footer-social-pill">
                  <span>✉️ Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © {new Date().getFullYear()} C A Sagar Varma. All rights reserved.
            </div>
            <div style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.25rem', color: 'var(--yellow-hero)' }}>
              Built with React, Vite &amp; an insatiable appetite for good books.
            </div>
          </div>
        </div>
      </footer>

      {/* CASE STUDY MODAL */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal__header">
              <button
                className="project-modal__close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="badge-neon green">{activeModalProject.badge}</div>
              <h3 className="project-modal__title">{activeModalProject.title}</h3>
              <p style={{ color: 'var(--ink-muted)', marginTop: '0.25rem', fontWeight: 600 }}>
                {activeModalProject.subtitle}
              </p>
            </div>

            <div className="project-modal__body">
              <div className="project-modal__section-label">Architecture &amp; Core Highlights</div>
              <ul className="project-modal__points">
                {activeModalProject.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className="project-modal__section-label" style={{ marginTop: '1.5rem' }}>
                Technologies Deployed
              </div>
              <div className="genre-pills">
                {activeModalProject.tech.map((t) => (
                  <span key={t} className="genre-pill highlight">{t}</span>
                ))}
              </div>

              <div className="project-modal__actions">
                {activeModalProject.demo && (
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="button-alt is--magenta"
                  >
                    <span className="button-alt__text-wrap">Launch Live Application</span>
                    <span className="button-alt__icon-wrap">↗</span>
                  </a>
                )}
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card-action secondary"
                    style={{ flex: 'none', padding: '0.6rem 1.4rem' }}
                  >
                    ⚡ View Source on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MASCOT POP-UP EASTER EGG (Bottom-Right Ear Button) */}
      <div className="mascot-easter-egg">
        {easterEggOpen && (
          <div className="mascot-popover">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 className="mascot-popover__title">Want to join forces? 🦊</h4>
              <button
                onClick={() => setEasterEggOpen(false)}
                style={{ fontSize: '1rem', fontWeight: 800, padding: '0.2rem' }}
              >
                ✕
              </button>
            </div>
            <p className="mascot-popover__body">
              I'm always ready to talk about full-stack architectures, hackathons, or book recommendations!
            </p>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="button-alt is--magenta"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span className="button-alt__text-wrap" style={{ flex: 1, textAlign: 'center' }}>Say Hello 👋</span>
              <span className="button-alt__icon-wrap">→</span>
            </a>
          </div>
        )}

        <button
          className="mascot-btn"
          onClick={() => setEasterEggOpen(!easterEggOpen)}
          title="Click me!"
          aria-label="Easter Egg Mascot"
        >
          <div className="mascot-ears">
            <div className="mascot-ear"></div>
            <div className="mascot-ear"></div>
          </div>
          <span>🦊</span>
        </button>
      </div>
    </div>
  );
}
