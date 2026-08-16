import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import ResearchExperience from './components/ResearchExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Presentations from './components/Presentations';
import Achievement from './components/Achievement';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-scientific-dark selection:bg-scientific-light selection:text-scientific-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchExperience />
        <Publications />
        <Education />
        <Projects />
        <Skills />
        <Presentations />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
