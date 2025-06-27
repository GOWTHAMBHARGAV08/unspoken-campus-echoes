
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
    <section id="skills" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <Card className="shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-center text-red-600">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-800 [&>div]:bg-red-600" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-center text-red-600">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} className="text-sm bg-red-600 hover:bg-red-700 text-white">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-center text-red-600">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm border-gray-600 text-gray-300 hover:bg-gray-800">
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
