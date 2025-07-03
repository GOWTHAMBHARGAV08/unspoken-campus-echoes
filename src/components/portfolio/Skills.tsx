
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    'Python Programming', 'HTML/CSS', 'AI Usage', 'Problem Solving using AI', 
    'Machine Learning', 'AI Agents', 'Gen AI'
  ];

  const tools = [
    'VS Code', 'ChatGPT', 'Gemini', 'Google AI Studio', 'Notebook LM', 'Lovable'
  ];

  const softSkills = [
    'Communication', 'Teamwork', 'Creativity', 'Time Management', 'Critical Thinking'
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-black relative">
      {/* Cinematic background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl bg-gray-900/80 border-gray-800 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-red-600">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill) => (
                      <Badge key={skill} className="text-sm bg-red-600 hover:bg-red-700 text-white transition-all duration-200 hover:scale-105">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl bg-gray-900/80 border-gray-800 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-red-600">Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <Badge key={tool} className="text-sm bg-red-600 hover:bg-red-700 text-white transition-all duration-200 hover:scale-105">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl bg-gray-900/80 border-gray-800 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-red-600">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm border-gray-600 text-gray-300 hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
