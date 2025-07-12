
import { useEffect, useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "API Integration", "Charts"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Showcasing some of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass glass-hover border-white/10 overflow-hidden group transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardDescription className="text-gray-400 text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass border-purple-400/50 text-purple-400 hover:text-white text-sm"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass border-blue-400/50 text-blue-400 hover:text-white text-sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
