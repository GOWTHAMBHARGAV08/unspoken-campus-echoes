
import React from 'react';
import Header from './portfolio/Header';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Projects from './portfolio/Projects';
import Resume from './portfolio/Resume';
import Achievements from './portfolio/Achievements';
import Blog from './portfolio/Blog';
import Contact from './portfolio/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="bg-black">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Achievements />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;
