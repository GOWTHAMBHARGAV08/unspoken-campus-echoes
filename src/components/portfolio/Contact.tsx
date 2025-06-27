
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
    console.log('Form submitted:', formData);
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
    <section id="contact" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a 
                chat about technology and innovation. Feel free to reach out through any of the 
                channels below or use the contact form.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700">
                      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                        <IconComponent size={20} className="text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-gray-400 text-sm">{item.value}</p>
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
              
              <div className="mt-8 p-6 bg-gradient-to-r from-red-600/20 to-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">Quick Response Promise</h4>
                <p className="text-gray-300 text-sm">
                  I typically respond to messages within 24 hours. If you don't hear back from me, 
                  please don't hesitate to follow up!
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project, opportunity, or just say hello!"
                      required
                      rows={5}
                      className="flex w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full flex items-center gap-2 bg-red-600 hover:bg-red-700">
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
      <footer className="mt-16 pt-8 border-t border-gray-800">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
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
