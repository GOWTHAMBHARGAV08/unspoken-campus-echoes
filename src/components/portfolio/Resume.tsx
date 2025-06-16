
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Resume / CV
          </h2>
          
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Professional Resume</CardTitle>
              <p className="text-gray-600">
                Download my complete resume with detailed information about my education, 
                skills, and achievements.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <div className="w-24 h-32 mx-auto mb-4 bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <FileText size={48} className="text-white" />
                </div>
                <p className="text-sm text-gray-500">PDF Format • Last Updated: [Date]</p>
              </div>
              
              <Button size="lg" className="flex items-center gap-2 mx-auto">
                <Download size={20} />
                Download Resume
              </Button>
              
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-xl font-semibold mb-4">Quick Resume Summary</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-gray-700 text-sm">
                      B.Tech in CSE (Computer Science Engineering)<br />
                      Parul University<br />
                      Expected: 2026 | CGPA: 6.05/10
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                    <p className="text-gray-700 text-sm">
                      • Programming: Python, HTML/CSS<br />
                      • AI Usage & Problem Solving<br />
                      • Video Editing & Design Tools
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <p className="text-gray-700 text-sm">
                      • English (Fluent)<br />
                      • Hindi<br />
                      • Telugu
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
