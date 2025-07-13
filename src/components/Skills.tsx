
import { useEffect, useState } from 'react';
import { Code2, Database, Globe, Smartphone, Server, GitBranch } from 'lucide-react';

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
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend",
    skills: ["Node.js", "Express.js"]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database",
    skills: ["MongoDB"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Deployment",
    skills: ["Netlify", "Render"]
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "AI / Integration",
    skills: ["Gemini API", "REST APIs", "Axios"]
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
  }
];


  return (
    <section id="skills" className="section-padding min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies to build better solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass glass-hover p-6 rounded-xl space-y-4 transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-purple-400">{category.icon}</div>
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
