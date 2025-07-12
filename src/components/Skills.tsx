
import { useEffect, useState } from 'react';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, color: "from-blue-400 to-cyan-400" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
        { name: "Next.js", level: 80, color: "from-gray-600 to-gray-400" },
        { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-teal-400" },
        { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-400" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-400 to-emerald-400" },
        { name: "Express.js", level: 80, color: "from-gray-500 to-gray-300" },
        { name: "Python", level: 75, color: "from-yellow-400 to-blue-400" },
        { name: "Firebase", level: 85, color: "from-orange-400 to-yellow-400" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-400" },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-300" },
        { name: "AWS", level: 65, color: "from-orange-300 to-orange-500" },
        { name: "Figma", level: 75, color: "from-purple-400 to-pink-400" },
        { name: "Webpack", level: 70, color: "from-blue-400 to-indigo-400" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-purple-900/20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-1000 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="glass glass-hover p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'
                      }`}
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Other Technologies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'PostgreSQL', 'Redis', 'GraphQL', 'Jest', 'Cypress',
              'Sass', 'Material-UI', 'Stripe', 'Socket.io', 'Nginx', 'Linux'
            ].map((tech, index) => (
              <div
                key={tech}
                className={`glass glass-hover p-4 rounded-lg text-center text-white font-medium transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: `${800 + (index * 50)}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
