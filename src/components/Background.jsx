import React from 'react'

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

export default Background