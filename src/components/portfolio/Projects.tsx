
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Projects = () => {
  const projects = [
    {
      title: 'AI Chatbot Assistant',
      description: 'A conversational AI assistant built using Python and natural language processing to help students with academic queries.',
      technologies: ['Python', 'NLTK', 'Flask', 'HTML/CSS'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing projects and skills, built with modern web technologies.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing and visualizing student performance data using Python and modern charting libraries.',
      technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A simple yet effective task management application to help students organize their academic and personal tasks.',
      technologies: ['JavaScript', 'Local Storage', 'CSS3', 'HTML5'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      liveDemo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-900 border-gray-800">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                      <Github size={16} />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 mx-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => window.open('https://github.com/GOWTHAMBHARGAV08', '_blank')}
            >
              <Github size={20} />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
