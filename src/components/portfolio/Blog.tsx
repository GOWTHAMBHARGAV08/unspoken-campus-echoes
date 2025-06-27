
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'My Journey into Artificial Intelligence',
      excerpt: 'When I first heard about Artificial Intelligence, it felt like something out of a sci-fi movie — machines that could think, learn, and even create. But the more I explored, the more I realized AI is no longer the future — it\'s the present.',
      fullContent: `When I first heard about Artificial Intelligence, it felt like something out of a sci-fi movie — machines that could think, learn, and even create. But the more I explored, the more I realized AI is no longer the future — it's the present.

As a 4th-year B.Tech student, I started diving into AI out of curiosity. What began as casual reading turned into hands-on experimentation with tools like ChatGPT, image generators, and AI-based content creation platforms. I was fascinated by how simple prompts could produce intelligent results, automate tasks, and spark creativity.

Over time, I explored:

• Prompt engineering — crafting effective inputs to get the best outputs
• AI tools for writing, design, and productivity  
• Real-world use cases in marketing, education, and software

This journey has just begun. I'm constantly learning, building small projects, and connecting with others passionate about AI. My goal? To bridge the gap between human creativity and machine intelligence — in a way that adds value, not replaces it.`,
      date: '2024-12-15',
      readTime: '5 min read',
      tags: ['AI', 'Learning', 'Journey'],
      featured: true
    }
  ];

  return (
    <section id="blog" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Blog & Thoughts
          </h2>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl leading-tight text-white">
                      {post.title}
                    </CardTitle>
                    {post.featured && (
                      <Badge className="ml-2 text-xs bg-red-600 hover:bg-red-700 text-white">Featured</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-gray-300 leading-relaxed">
                    <p className="mb-4">{post.excerpt}</p>
                    
                    <div className="whitespace-pre-line text-sm">
                      {post.fullContent.split('\n\n').slice(1).map((paragraph, idx) => (
                        <p key={idx} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto p-6 bg-gray-900 border-gray-800">
              <CardContent className="text-center">
                <BookOpen size={48} className="mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  More Content Coming Soon
                </h3>
                <p className="text-gray-300 mb-4">
                  I regularly share insights about AI, technology, learning experiences, and personal growth. 
                  Stay tuned for more articles and tutorials!
                </p>
                <Button variant="outline" className="flex items-center gap-2 mx-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  Subscribe to Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
