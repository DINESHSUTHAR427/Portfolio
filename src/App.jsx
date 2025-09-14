import './App.css'
import React from 'react'
import Intro from './components/Intro';
import Background from './components/Background';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Hobby from './components/Hobby';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Background />
        <Skills />
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
