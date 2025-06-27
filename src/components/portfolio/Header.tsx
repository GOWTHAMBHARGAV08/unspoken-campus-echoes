
import React, { useState } from 'react';
import { Menu, X, Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md shadow-lg z-50 border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-red-600">
              GOWTHAM BHARGAV
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-black/95 rounded-lg">
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Netflix-style Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Welcome to My
                  <span className="text-red-600 block">Portfolio</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                  Aspiring AI Enthusiast | Final Year B.Tech Student
                </p>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  Passionate about artificial intelligence, machine learning, and creating innovative solutions 
                  that make a difference in the world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('#projects')}
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-md flex items-center gap-2"
                >
                  <Play size={20} fill="white" />
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection('#contact')}
                  className="border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white text-lg px-8 py-4 flex items-center gap-2"
                >
                  <Info size={20} />
                  More Info
                </Button>
              </div>
            </div>

            {/* Right side - Single Profile Image */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-red-600">
                    <img 
                      src="/lovable-uploads/dd27e75b-1268-4dd9-8597-ed76f9cd7fe8.png" 
                      alt="Gowtham Bhargav"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>
      </section>
    </>
  );
};

export default Header;
