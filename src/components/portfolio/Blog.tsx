
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'My Journey into Artificial Intelligence',
      excerpt: 'How I discovered my passion for AI and the steps I took to start learning machine learning and deep learning concepts...',
      date: '2023-12-15',
      readTime: '5 min read',
      tags: ['AI', 'Learning', 'Career'],
      featured: true
    },
    {
      title: 'Productivity Tips for Engineering Students',
      excerpt: 'Sharing the tools and techniques I use to stay organized, manage my time effectively, and maintain work-life balance...',
      date: '2023-11-20',
      readTime: '4 min read',
      tags: ['Productivity', 'Student Life', 'Tips'],
      featured: false
    },
    {
      title: 'Building My First Web Application',
      excerpt: 'A detailed walkthrough of creating my first full-stack web application, the challenges I faced, and lessons learned...',
      date: '2023-10-10',
      readTime: '7 min read',
      tags: ['Web Development', 'React', 'Learning'],
      featured: true
    }
  ];

  return (
    <section id="blog" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Blog & Thoughts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg leading-tight">
                      {post.title}
                    </CardTitle>
                    {post.featured && (
                      <Badge variant="default" className="ml-2 text-xs">Featured</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 p-0 h-auto text-primary">
                    Read More
                    <ArrowRight size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto p-6">
              <CardContent className="text-center">
                <BookOpen size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  More Content Coming Soon
                </h3>
                <p className="text-gray-600 mb-4">
                  I regularly share insights about technology, learning experiences, and personal growth. 
                  Stay tuned for more articles and tutorials!
                </p>
                <Button variant="outline" className="flex items-center gap-2 mx-auto">
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
