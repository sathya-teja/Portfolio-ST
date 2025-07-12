
import { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  // Floating particles
  const particles = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="floating-particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen relative overflow-hidden parallax-bg">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white animate-slide-up">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
                  Panyam Sathya Teja
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center">
                <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
                  {typedText}
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed animate-slide-up">
              Passionate about creating innovative web solutions that bridge the gap between 
              cutting-edge technology and exceptional user experiences. I specialize in building 
              scalable, performant applications using modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button
                size="lg"
                className="glass glass-hover neon-glow px-8 py-3 text-lg font-medium group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass glass-hover border-purple-400/50 text-purple-400 hover:text-white px-8 py-3 text-lg font-medium group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-scale-in">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Animated background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-glow opacity-20 scale-110" />
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full glass border-2 border-purple-400/30 overflow-hidden animate-float">
                <img
                  src="/placeholder.svg"
                  alt="Panyam Sathya Teja"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
