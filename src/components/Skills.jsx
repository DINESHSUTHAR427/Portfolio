import React from 'react'

function Skills() {
    const skills = [
    { name: 'HTML5', icon: <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" alt="" /> },
    { name: 'CSS3', icon: <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" alt="" /> },
    { name: 'JavaScript', icon: <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" alt="" /> },
    { name: 'React', icon: <img src="https://cdn-icons-png.flaticon.com/512/5463/5463272.png" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" alt="" /> },
    { name: 'Node.js', icon: <img src="https://cdn-icons-png.flaticon.com/512/15484/15484303.png" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" alt="" /> },
    { name: 'Git', icon: <img src="https://cdn-icons-png.flaticon.com/512/15466/15466163.png" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" alt="" /> },
    { name: 'GitHub', icon: <img src="https://cdn-icons-png.flaticon.com/512/5968/5968896.png" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" alt="" /> },
  ];
  return (
    <section id="skills" className="section skills">
      <h2>My Skills</h2>
      <p className="section-intro">Here are some of the technologies I work with.</p>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills