
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-8 shadow-lg bg-gray-900/80 backdrop-blur-md border-gray-800">
              <CardContent className="space-y-6">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    GOWTHAM BHARGAV
                  </h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Final Year B.Tech Student in CSE
                  </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold mb-4 text-red-600">
                      My Interests
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {[
                        'Artificial Intelligence & Machine Learning',
                        'Technology Innovation',
                        'Web Development',
                        'Content Creation',
                        'Problem Solving'
                      ].map((interest, index) => (
                        <motion.li
                          key={interest}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          • {interest}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold mb-4 text-red-600">
                      Quick Facts
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {[
                        '📍 Location: VADODARA',
                        '🎓 Expected Graduation: 2026',
                        '💼 Looking for: Internships/Entry-level roles',
                        '🌱 Currently Learning: AI/ML Technologies'
                      ].map((fact, index) => (
                        <motion.li
                          key={fact}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          • {fact}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="pt-4 border-t border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-300 leading-relaxed">
                    I am a passionate and driven final-year engineering student with a deep curiosity for 
                    artificial intelligence and emerging technologies. My journey in tech began with a simple 
                    fascination for how computers work, which has evolved into a commitment to creating 
                    meaningful solutions that can make a positive impact. I believe in continuous learning, 
                    collaborative problem-solving, and the power of technology to transform lives. 
                    My goal is to contribute to innovative projects while growing as a professional in the AI field.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
