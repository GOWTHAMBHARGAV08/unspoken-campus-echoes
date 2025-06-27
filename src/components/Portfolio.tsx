
import React from 'react';
import { motion } from 'framer-motion';
import Header from './portfolio/Header';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Resume from './portfolio/Resume';
import Achievements from './portfolio/Achievements';
import Blog from './portfolio/Blog';
import Contact from './portfolio/Contact';
import Background3D from './portfolio/Background3D';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Background3D />
      <div className="relative z-10">
        <Header />
        <main className="bg-black/80">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <About />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Skills />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Resume />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Achievements />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Blog />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
