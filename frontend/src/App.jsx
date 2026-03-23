import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <>
      <CursorTrail />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
