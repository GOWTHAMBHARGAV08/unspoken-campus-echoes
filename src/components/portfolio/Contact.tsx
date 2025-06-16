
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gowthambharav619@gmail.com',
      link: 'mailto:gowthambharav619@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/gowtham-bhargav-562530353',
      link: 'https://www.linkedin.com/in/gowtham-bhargav-562530353'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/GOWTHAMBHARGAV08',
      link: 'https://github.com/GOWTHAMBHARGAV08?tab=overview&from=2025-05-01&to=2025-05-31'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vadodara, Gujarat',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a 
                chat about technology and innovation. Feel free to reach out through any of the 
                channels below or use the contact form.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-gray-600 text-sm">{item.value}</p>
                      </div>
                    </div>
                  );
                  
                  return item.link ? (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Response Promise</h4>
                <p className="text-gray-600 text-sm">
                  I typically respond to messages within 24 hours. If you don't hear back from me, 
                  please don't hesitate to follow up!
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project, opportunity, or just say hello!"
                      required
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Gowtham Bhargav. Built with ❤️ using React and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Thank you for visiting my portfolio!
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
