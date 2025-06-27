
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          
          <Card className="p-8 shadow-lg bg-gray-900 border-gray-800">
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  GOWTHAM BHARGAV
                </h3>
                <p className="text-lg text-gray-300 mb-4">
                  Final Year B.Tech Student in [Your Branch]
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-red-600">
                    My Interests
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Artificial Intelligence & Machine Learning</li>
                    <li>• Technology Innovation</li>
                    <li>• Web Development</li>
                    <li>• Content Creation</li>
                    <li>• Problem Solving</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-red-600">
                    Quick Facts
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 📍 Location: VADODARA</li>
                    <li>• 🎓 Expected Graduation: 2026</li>
                    <li>• 💼 Looking for: Internships/Entry-level roles</li>
                    <li>• 🌱 Currently Learning: AI/ML Technologies</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate and driven final-year engineering student with a deep curiosity for 
                  artificial intelligence and emerging technologies. My journey in tech began with a simple 
                  fascination for how computers work, which has evolved into a commitment to creating 
                  meaningful solutions that can make a positive impact. I believe in continuous learning, 
                  collaborative problem-solving, and the power of technology to transform lives. 
                  My goal is to contribute to innovative projects while growing as a professional in the AI field.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
