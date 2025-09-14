import React from 'react'

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

export default Achievements