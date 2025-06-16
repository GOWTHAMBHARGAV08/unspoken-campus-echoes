
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Generative AI Mastermind',
      provider: 'Outskill',
      date: 'June 2025',
      description: 'I attended a 3-day AI Mastermind program where I deepened my understanding of various AI tools and technologies. This experience has strengthened my foundation in AI, and I am eager to expand my skills further to become an AI generalist. I am passionate about learning how to apply AI effectively across different domains.'
    },
    {
      title: 'Computer Networks And Internet Protocol',
      provider: 'Certificate',
      date: 'April 2024',
      description: ''
    }
  ];

  return (
    <section id="achievements" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Achievements & Recognition
          </h2>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <FileText size={24} className="text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {achievements.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <Badge variant="default" className="text-xs">
                          {item.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.provider}
                      </p>
                      {item.description && (
                        <p className="text-sm text-gray-700 italic">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Always Learning, Always Growing
                </h3>
                <p className="text-gray-600">
                  I believe in continuous improvement and actively seek opportunities to learn new skills, 
                  contribute to meaningful projects, and make a positive impact in the tech community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
