
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { downloadResumePDF } from '@/utils/resumePdfGenerator';

const Resume = () => {
  const handleDownload = () => {
    downloadResumePDF();
  };

  return (
    <section id="resume" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Resume / CV
          </h2>
          
          {/* Contact Information */}
          <Card className="shadow-lg bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">
                BHAVANAM GOWTHAM BHARGAV REDDY
              </CardTitle>
              <p className="text-center text-gray-300 text-lg">
                B.Tech - CSE - Artificial Intelligence - PIET
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone size={16} className="text-red-600" />
                  <span>+91-7780125919</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={16} className="text-red-600" />
                  <span>220303124164@paruluniversity.ac.in</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} className="text-red-600" />
                  <span>Inkollu, Andhra Pradesh</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Linkedin size={16} className="text-red-600" />
                  <span>gowtham-bhargav-562530353</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brief Summary */}
          <Card className="shadow-lg bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white">Brief Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Aspiring AI Engineer with a strong passion for Machine Learning, Deep Learning, and Python programming. 
                Self-taught and highly motivated, currently focused on building practical AI projects and learning from experience 
                with real-world datasets. Actively seeking an AI internship opportunity to apply skills, gain industry exposure, 
                and grow under professional mentorship. Adept at quick learning, problem-solving, and working on innovative solutions.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="shadow-lg bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600/50 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-white">Parul University</h4>
                      <p className="text-gray-300">B.Tech - CSE - Artificial Intelligence - PIET</p>
                      <p className="text-sm text-gray-400">CGPA: 6.05 / 10</p>
                    </div>
                    <Badge className="bg-red-600 hover:bg-red-700 text-white">2022 - 2026</Badge>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-600/50 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-white">Lakshyaa Jr College, Guntur</h4>
                      <p className="text-gray-300">12th - BIEAP</p>
                      <p className="text-sm text-gray-400">Percentage: 68.20 / 100</p>
                    </div>
                    <Badge className="bg-red-600 hover:bg-red-700 text-white">2022</Badge>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-600/50 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-white">Universal High School, Inkollu</h4>
                      <p className="text-gray-300">10th - BSEAP</p>
                      <p className="text-sm text-gray-400">Percentage: 78.67 / 100</p>
                    </div>
                    <Badge className="bg-red-600 hover:bg-red-700 text-white">2020</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="shadow-lg bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600/50 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">EMAIL AI AGENT</h4>
                    <Badge className="bg-red-600 hover:bg-red-700 text-white">18 Jun, 2025 - 25 Jun, 2025</Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">Mentor: NO</p>
                  <p className="text-gray-400 text-sm mb-2">Key Skills: AUTOMATION WITH AI</p>
                  <p className="text-blue-400 text-sm">Project Link: https://n8n.io/</p>
                </div>
                
                <div className="border-l-4 border-red-600/50 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">Portfolio Website</h4>
                    <Badge className="bg-red-600 hover:bg-red-700 text-white">16 Jun, 2025 - 16 Jun, 2025</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Key Skills: BUILDING WEBSITE WITH AI</p>
                  <p className="text-blue-400 text-sm">Project Link: https://unspoken-campus-echoes.lovable.app/</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-lg bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white">Assessments / Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600/50 pl-4">
                  <h4 className="font-semibold text-white mb-2">Computer Networks And Internet Protocol</h4>
                  <p className="text-gray-300 text-sm mb-1">Aggregate: 61 / 100</p>
                  <p className="text-gray-400 text-sm mb-2">Subjects: Computer Networks And Internet Protocol (61 / 100)</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-gray-300 border-gray-600">Computer Networking</Badge>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">Networking</Badge>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">Networking Protocol</Badge>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-600/50 pl-4">
                  <h4 className="font-semibold text-white mb-2">AI Mastermind</h4>
                  <p className="text-gray-300 text-sm mb-2">Subjects: Generative AI (92 / 100)</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-gray-300 border-gray-600">AI</Badge>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">Artificial Intelligence</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Interests & Web Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Personal Interests / Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• PROBLEM SOLVING WITH AI</li>
                  <li>• CONTENT CREATION</li>
                  <li>• EXPLORING NEW TECH</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Web Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-blue-400">
                  <Github size={16} />
                  <a href="https://github.com/GOWTHAMBHARGAV08" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/GOWTHAMBHARGAV08
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personal Details */}
          <Card className="shadow-lg bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white">Personal Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <p><span className="font-semibold text-white">Gender:</span> Male</p>
                  <p><span className="font-semibold text-white">Marital Status:</span> Single</p>
                  <p><span className="font-semibold text-white">Current Address:</span> 238, Kishan Vintage, Kamlapura, Vadodara, Gujarat, Inkollu, Andhra Pradesh, India - 523190</p>
                </div>
                <div>
                  <p><span className="font-semibold text-white">Date of Birth:</span> 08 Mar, 2005</p>
                  <p><span className="font-semibold text-white">Known Languages:</span> Telugu, Hindi, English</p>
                  <p><span className="font-semibold text-white">Phone Numbers:</span> +91-7780125919</p>
                  <p><span className="font-semibold text-white">Emails:</span> 220303124164@paruluniversity.ac.in, gowthambhargav619@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Button */}
          <div className="text-center">
            <Card className="max-w-md mx-auto bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700">
              <CardContent className="text-center p-6">
                <div className="w-24 h-32 mx-auto mb-4 bg-gradient-to-b from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                  <FileText size={48} className="text-white" />
                </div>
                <p className="text-sm text-gray-400 mb-4">PDF Format • Complete Resume</p>
                <Button 
                  size="lg" 
                  className="flex items-center gap-2 mx-auto bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleDownload}
                >
                  <Download size={20} />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
