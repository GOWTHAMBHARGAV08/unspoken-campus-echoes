import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 80 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'AI Usage', level: 80 },
    { name: 'Problem Solving using AI', level: 90 },
  ];

  const tools = [
    'ChatGPT', 'Gemini', 'Canva', 'DaVinci Resolve', 'Premiere Pro', 'CapCut', 'VS Code', 'Lovable'
  ];

  const softSkills = [
    'Communication', 'Teamwork', 'Creativity', 'Time Management', 'Critical Thinking'
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
