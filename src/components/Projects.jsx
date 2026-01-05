import React from 'react'

function Projects() {
  const projects = [
    { name: 'Portfolio Website', description: 'This site — React + Vite, responsive UI.',GithubLink: 'https://github.com/DINESHSUTHAR427/Portfolio', websiteLink: 'https://dineshsutharr.vercel.app/' },
    { name: 'Blogify---A-Simple-Blogging-Application', description: 'A simple and elegant blogging platform built with Node.js, Express, and MongoDB. Blogify allows users to sign up, create beautifully formatted blog posts with cover images, and engage with content through comments.', GithubLink: 'https://github.com/DINESHSUTHAR427/Blog_Application-with-MERN',websiteLink: 'https://blog-application-with-mern.vercel.app/', },
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

export default Projects