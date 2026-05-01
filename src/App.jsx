import { useState, useEffect } from 'react';
import './App.css';

const GITHUB_USER = 'Futurater';

const SECTIONS = ['Home', 'Projects', 'Skills', 'Achievements', 'Contact'];

const SI = 'https://cdn.simpleicons.org';

const SKILLS = {
  Languages: [
    { name: 'JavaScript', icon: `${SI}/javascript` },
    { name: 'Python',     icon: `${SI}/python` },
    { name: 'Java',       icon: `${SI}/java/f89820` },
    { name: 'HTML5',      icon: `${SI}/html5` },
    { name: 'CSS3',       icon: `${SI}/css3` },
  ],
  Frontend: [
    { name: 'React',       icon: `${SI}/react/61dafb` },
    { name: 'Tailwind',    icon: `${SI}/tailwindcss` },
    { name: 'Bootstrap',   icon: `${SI}/bootstrap` },
    { name: 'EJS',         icon: null },
  ],
  Backend: [
    { name: 'Node.js',    icon: `${SI}/nodedotjs` },
    { name: 'Express.js', icon: `${SI}/express/000000` },
    { name: 'Mongoose',   icon: `${SI}/mongoose` },
  ],
  Databases: [
    { name: 'MongoDB',    icon: `${SI}/mongodb` },
    { name: 'MySQL',      icon: `${SI}/mysql/4479a1` },
  ],
  'Core Concepts': [
    { name: 'REST APIs',       icon: null },
    { name: 'Microservices',   icon: null },
    { name: 'DSA',             icon: null },
    { name: 'Algorithms',      icon: null },
  ],
  'Tools & Platforms': [
    { name: 'Git',     icon: `${SI}/git` },
    { name: 'GitHub',  icon: `${SI}/github/24292f` },
    { name: 'Vercel',  icon: `${SI}/vercel/000000` },
    { name: 'Render',  icon: `${SI}/render/46e3b7` },
    { name: 'Postman', icon: `${SI}/postman` },
  ],
};

const PROJECTS = [
  {
    id: 'vantage',
    emoji: '📈',
    category: '💻 Full-Stack · AI',
    name: 'Vantage — Trading Platform & AI Advisor',
    points: [
      'Engineered a full-stack trading platform with a microservices architecture using React, Node.js, and Python, featuring a real-time market data simulator and glassmorphism UI.',
      'Developed a standalone AI Stock Advisor microservice using Python and the Google Gemini API to analyze market sentiment and deliver buy/hold/sell recommendations.',
      'Designed a robust REST API with Express and MongoDB to persistently manage trading states — user holdings, active orders, and portfolio positions.',
    ],
    tech: ['React', 'Node.js', 'Python', 'Express', 'MongoDB', 'Gemini API', 'Docker'],
    demo: 'https://vantage-frontend-t5cy.onrender.com',
    github: 'https://github.com/Futurater/vantage',
  },
  {
    id: 'staynest',
    emoji: '🏡',
    category: '💻 Full-Stack · AI',
    name: 'StayNest — Property Rental Platform & AI Assistant',
    points: [
      'Developed a comprehensive property rental platform using Node.js, Express.js, and MongoDB Atlas with secure user authentication via Passport.js.',
      'Engineered a robust property management system with category filtering, user reviews, and Cloudinary API integration for seamless multi-image uploads.',
      'Integrated the Google Gemini 2.5 Flash Lite API to power a context-aware floating AI chat widget for real-time property recommendations.',
      'Designed a responsive, server-side rendered frontend utilizing EJS and Bootstrap, deployed reliably via Vercel.',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Passport.js', 'Cloudinary', 'Gemini API', 'EJS', 'Vercel'],
    demo: 'https://staynest-rouge.vercel.app/listings',
    github: 'https://github.com/Futurater/staynest',
  },
];

const ACHIEVEMENTS = [
  {
    icon: '🥉',
    title: '2nd Runner-Up — Hackfest (National Level Hackathon)',
    org: 'NMAMIT',
    desc: 'Secured 3rd place in a 36-hour national-level competition by developing an automated software solution for complex document processing and risk analysis — recognized among the top submissions for technical depth and real-world applicability.',
  },
];

const CERTIFICATIONS = [
  {
    icon: '💻',
    iconClass: 'blue',
    name: 'Full Stack Web Development',
    issuer: 'Apna College',
  },
  {
    icon: '☁️',
    iconClass: 'orange',
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    issuer: 'Oracle',
  },
];

function Navbar({ active, setActive }) {
  return (
    <header className="navbar">
      <div className="navbar-logo">S<span>V</span></div>
      <nav className="nav-pill">
        {SECTIONS.map((s) => (
          <a
            key={s}
            href="#"
            className={active === s ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); setActive(s); }}
          >
            {s}
          </a>
        ))}
      </nav>
      <div className="navbar-icon" title="Settings">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>
    </header>
  );
}

function HeroSection() {

  return (
    <>
      <main className="hero fade-in">

        <div className="section-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          About Me
        </div>

        <div className="hero-name-row">
          <img src="/profile.png" alt="Sagar Varma" className="hero-photo" />
          <h1 className="hero-title">
            hey, I'm Sagar <span className="wave">👋</span>
          </h1>
        </div>

        <p className="hero-bio">
          Full-stack developer specializing in MongoDB, Express, React, and Node.js,
          with a strong foundation in building practical, high-performance web applications.
          Driven by a deep curiosity for how things work — taking ideas from concept to
          fully functional products. Currently pursuing B.E. CSE at Sir MVIT, Bengaluru.
        </p>

        <div className="mission-card">
          <div className="mission-label">🚀 MY MISSION</div>
          <p className="mission-body">
            Bridging the Gap Between Design and Development: Where creativity
            meets functionality, and innovation drives progress.
          </p>
          <p className="mission-motto">Keep moving, don't settle. 🚀</p>
        </div>
      </main>

    </>
  );
}

function ProjectsSection() {
  return (
    <section className="fade-in">
      <div className="section-wrapper">
        <h2 className="section-title">My Work 🛠️</h2>
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div className={`project-card delay-${i + 1}`} key={p.id}>
              <div className="project-preview">
                <div className="browser-bar">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="preview-content">{p.emoji}</div>
              </div>
              <div className="project-info">
                <div className="project-category">{p.category}</div>
                <div className="project-name">{p.name}</div>
                <ul className="project-points">
                  {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
                <div className="tech-pills">
                  {p.tech.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a className="project-link primary" href={p.demo} target="_blank" rel="noreferrer">
                    🔗 Live Demo
                  </a>
                  <a className="project-link secondary" href={p.github} target="_blank" rel="noreferrer">
                    ⚡ GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="fade-in">
      <div className="section-wrapper">
        <h2 className="section-title">Achievements 🏆</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div className="achievement-card" key={i}>
              <div className="achievement-icon">{a.icon}</div>
              <div>
                <div className="achievement-title">{a.title}</div>
                <p className="achievement-desc">{a.desc}</p>
                <div className="achievement-org">📍 {a.org}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '2.5rem' }}>Certifications 📜</h2>
        <div className="certs-grid">
          {CERTIFICATIONS.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className={`cert-icon ${c.iconClass}`}>{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">Issued by {c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="fade-in">
      <div className="contact-wrapper">
        <h2 className="section-title">Let's connect 🤝</h2>
        <p className="contact-desc">
          I'm open to new opportunities, collaborations, and interesting
          conversations. Reach out and let's build something awesome together.
        </p>
        <div className="social-pills">
          {[
            { label: 'Email', icon: '✉️', href: 'mailto:santoshpallavi107@gmail.com' },
            { label: 'GitHub', icon: '⚡', href: 'https://github.com/Futurater' },
            { label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/sagar-varma-760553297/' },
          ].map((s) => (
            <a className="social-pill" key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.icon} {s.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="fade-in">
      <div className="section-wrapper">
        <h2 className="section-title">Technical Skills 🛠️</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div className="skill-group" key={category}>
              <div className="skill-category">{category}</div>
              {/* Items with logos shown as logo+label, items without shown as text pills */}
              {items.some(s => s.icon) ? (
                <div className="skill-logos">
                  {items.map((s) => (
                    s.icon ? (
                      <div className="skill-logo-item" key={s.name} title={s.name}>
                        <img src={s.icon} alt={s.name} loading="lazy" />
                        <span>{s.name}</span>
                      </div>
                    ) : (
                      <span className="tech-pill" key={s.name}>{s.name}</span>
                    )
                  ))}
                </div>
              ) : (
                <div className="tech-pills">
                  {items.map((s) => <span className="tech-pill" key={s.name}>{s.name}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState('Home');

  const renderSection = () => {
    switch (active) {
      case 'Home':        return <HeroSection />;
      case 'Projects':    return <ProjectsSection />;
      case 'Skills':      return <SkillsSection />;
      case 'Achievements': return <AchievementsSection />;
      case 'Contact':     return <ContactSection />;
      default:            return <HeroSection />;
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar active={active} setActive={setActive} />
      {renderSection()}
      <footer className="footer">
        © {new Date().getFullYear()} C A Sagar Varma · Built with React &amp; ❤️
      </footer>
    </div>
  );
}
