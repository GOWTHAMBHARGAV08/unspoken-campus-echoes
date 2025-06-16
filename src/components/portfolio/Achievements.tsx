
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, FileText, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      category: 'Certifications',
      icon: FileText,
      items: [
        {
          title: 'Machine Learning Fundamentals',
          provider: 'Coursera',
          date: '2023',
          type: 'certification'
        },
        {
          title: 'Python for Data Science',
          provider: 'Udemy',
          date: '2023',
          type: 'certification'
        },
        {
          title: 'Web Development Bootcamp',
          provider: 'FreeCodeCamp',
          date: '2022',
          type: 'certification'
        }
      ]
    },
    {
      category: 'Internships & Experience',
      icon: Star,
      items: [
        {
          title: 'Summer Internship Program',
          provider: '[Company Name]',
          date: '2023',
          type: 'internship'
        },
        {
          title: 'Research Assistant',
          provider: '[University Department]',
          date: '2023',
          type: 'experience'
        }
      ]
    },
    {
      category: 'Awards & Recognition',
      icon: Trophy,
      items: [
        {
          title: 'Best Project Award',
          provider: 'College Tech Fest',
          date: '2023',
          type: 'award'
        },
        {
          title: 'Academic Excellence',
          provider: 'Dean\'s List',
          date: '2022-2023',
          type: 'recognition'
        }
      ]
    },
    {
      category: 'Events & Competitions',
      icon: Award,
      items: [
        {
          title: 'Hackathon Participant',
          provider: '[Event Name]',
          date: '2023',
          type: 'participation'
        },
        {
          title: 'Technical Workshop',
          provider: 'AI/ML Bootcamp',
          date: '2023',
          type: 'workshop'
        }
      ]
    }
  ];

  const getVariant = (type: string) => {
    switch (type) {
      case 'certification': return 'default';
      case 'internship': return 'secondary';
      case 'award': return 'destructive';
      case 'recognition': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <section id="achievements" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <IconComponent size={24} className="text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-4 border-primary/20 pl-4 py-2">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">
                              {item.title}
                            </h4>
                            <Badge variant={getVariant(item.type)} className="text-xs">
                              {item.date}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {item.provider}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
