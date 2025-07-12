
import { useEffect, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // const highlights = [
  //   {
  //     icon: <Code className="w-6 h-6 text-purple-400" />,
  //     title: "Clean Code Advocate",
  //     description: "Writing maintainable, scalable, and efficient code that stands the test of time."
  //   },
  //   {
  //     icon: <Palette className="w-6 h-6 text-blue-400" />,
  //     title: "UI/UX Focused",
  //     description: "Creating beautiful, intuitive interfaces that users love to interact with."
  //   },
  //   {
  //     icon: <Zap className="w-6 h-6 text-pink-400" />,
  //     title: "Performance Optimized",
  //     description: "Building lightning-fast applications with optimal performance and SEO."
  //   }
  // ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
            </div>

            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a love for creating digital experiences 
                that make a difference. With expertise spanning both frontend and backend technologies, 
                I enjoy the challenge of building complete, end-to-end solutions.
              </p>
              
              <p>
                My journey in development started with curiosity and has evolved into a deep 
                commitment to crafting clean, efficient code. I believe in the power of technology 
                to solve real-world problems and am always excited to take on new challenges.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Highlights Grid
            <div className="grid grid-cols-1 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass glass-hover p-4 rounded-xl flex items-start space-x-4 transition-all duration-500 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Column - Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 glass rounded-2xl p-4 neon-glow">
                <img
                  src="/sathya.jpg"
                  alt="Panyam Sathya Teja - About"
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 glass rounded-full flex items-center justify-center animate-float">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 glass rounded-full flex items-center justify-center animate-float delay-1000">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
