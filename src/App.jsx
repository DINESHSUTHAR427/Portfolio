import './App.css'
import React from 'react'

function Navbar() {
  const sectionIds = ['intro', 'background', 'achievements', 'projects', 'hobby', 'contact'];
  const [active, setActive] = React.useState('intro');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset on unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <header className="navbar" role="navigation" aria-label="Primary">
      <a className="brand" href="#intro" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        My Portfolio
      </a>
      <button
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        <svg className="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <nav id="primary-navigation" className={isMenuOpen ? 'open' : ''}>
        {sectionIds.map((id) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setIsMenuOpen(false)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Intro() {
  return (
    <section id="intro" className="section intro">
      <div>
        <h1>Welcome! I’m Dinesh suthar, a Web Developer</h1>
        <p className="lead">I build fast, accessible web apps with React, javascript, Node.js, and modern CSS. I specialize in performance, clean architectures, and delightful UX.</p>
      </div>
      <img src="/image.jpg" alt="A person coding on a laptop in a dark room." className="intro-image" />
    </section>
  )
}

function Background() {
  const timeline = [
    { year: '2024', title: 'I am a dedicated B.Sc. IT student at Gandhinagar University, with a strong interest in technology, programming, and problem-solving. My academic journey has helped me build knowledge in computer fundamentals, programming languages, databases, networking, and web development', description: ' ' ,skill: ' MY Skills :  HTML5,  CSS3 , JAVASCRIPT,REACT ,NODE.JS , GIT ,GITHUB' },
  ]
  return (
    <section id="background" className="section background">
      <h2>Background</h2>
      <p className="section-intro">Here’s a timeline of my professional growth. Each milestone marks a transformative moment in my career.</p>
      <ol className="timeline" aria-label="Career timeline">
        {timeline.map(item => (
          <li key={item.year} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h3>{item.skill}</h3>
              <p>{item.description}</p>
              
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Achievements() {
  const accolades = [
    { title: 'Education', detail: 'Former B.Sc. IT student with knowledge in programming, databases, and web technologies, eager to apply skills in practical projects and professional growth.' },
    {title: 'AI Tools Workshop by be10x',detail: 'Attended the AI Tools Workshop by be10x, led by Aditya Kachave (IIT Kharagpur alumnus), focusing on leveraging AI tools like ChatGPT and MidJourney to boost productivity and create high-quality content.'}
  ]
  return (
    <section id="achievements" className="section achievements">
      <h2>Achievements & Testimonials</h2>
      <ul className="cards" aria-label="Awards and testimonials">
        {accolades.map((a, i) => (
          <li key={i} className="card">
            <h3>{a.title}</h3>
            <p>{a.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Projects() {
  const projects = [
    { name: 'Portfolio Website', description: 'This site — React + Vite, responsive UI.', link: 'portfolio-g8j9vqx4e-dinesh-suthars-projects-5b4bee5e.vercel.app' },
    { name: 'Blogify---A-Simple-Blogging-Application', description: 'A simple and elegant blogging platform built with Node.js, Express, and MongoDB. Blogify allows users to sign up, create beautifully formatted blog posts with cover images, and engage with content through comments.', GithubLink: 'https://github.com/DINESHSUTHAR427/Blogify---A-Simple-Blogging-Application',websiteLink: 'https://blogify-a-simple-blogging-application-1s6q.onrender.com', },
  ]
  return (
    <section id="projects" className="section projects">
      <h2>Selected Projects</h2>
      <p className="section-intro">Dive into my work—click any project for details about approach, outcomes, and lessons learned.</p>
      <div className="grid">
        {projects.map(p => (
          <article key={p.name} className="project">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><a href={p.GithubLink} target="_blank" rel="noreferrer">Github →</a></p>
            <p><a href={p.websiteLink} target="_blank" rel="noreferrer">website →</a></p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Hobby() {
  return (
    <section id="hobby" className="section goals">
      <h2>Hobby</h2>
      <p>Always eager to learn new things and grow with continuous learning and innovation</p>
      <p>I enjoy interacting with new people, learning new things, and collaborating in team environments to achieve shared goals.</p>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Let’s connect</h2>
      <ul className="contact-list">
        <li><a href="dineshsutharr427@gmail.com">dineshsutharr427@gmail.com</a></li>
        <li> <a href="https://www.linkedin.com/in/dinesh-suthar-517388317/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/DINESHSUTHAR427" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <small>© {new Date().getFullYear()} Dinesh suthar. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Background />
        <Achievements />
        <Projects />
        <Hobby />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
