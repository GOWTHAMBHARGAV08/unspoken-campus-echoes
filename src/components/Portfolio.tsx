
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
import BackToTop from './portfolio/BackToTop';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Enhanced Cinematic Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-red-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10"></div>
        
        {/* Netflix-style dramatic lighting effects */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(17,24,39,0.4) 50%, rgba(0,0,0,0.9) 100%)
            `
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Cinematic vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        {/* Moving light streaks for drama */}
        <motion.div 
          className="absolute top-1/4 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent blur-sm"
          animate={{
            x: [-400, window.innerWidth + 400],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-80 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm"
          animate={{
            x: [400, -800],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating cinematic particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <Background3D />
      
      <div className="relative z-10">
        <Header />
        <main className="relative">
          {/* Enhanced section backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          
          <div className="relative z-10">
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
          </div>
        </main>
        <BackToTop />
      </div>
    </div>
  );
};

export default Portfolio;
