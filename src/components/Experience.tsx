
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.",
      achievements: [
        "Led a team of 5 developers in building a microservices architecture",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects ranging from e-commerce platforms to enterprise dashboards. Collaborated with design teams to implement pixel-perfect user interfaces.",
      achievements: [
        "Built 12+ production applications serving 100k+ users",
        "Reduced bug reports by 35% through comprehensive testing",
        "Mentored 3 junior developers and conducted code reviews"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Firebase", "TypeScript"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Agency Co.",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Specialized in creating responsive, interactive websites for various clients. Worked closely with designers to bring creative visions to life using modern frontend technologies.",
      achievements: [
        "Delivered 20+ responsive websites with 99% client satisfaction",
        "Improved website loading speeds by 50% on average",
        "Established component library used across all projects"
      ],
      technologies: ["JavaScript", "React", "Sass", "Webpack", "Figma"]
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "StartupX",
      location: "Austin, TX",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Started my professional journey building features for a fast-growing startup's web platform. Gained experience in full-stack development and agile methodologies.",
      achievements: [
        "Contributed to 50+ feature releases",
        "Learned and adapted to new technologies quickly",
        "Participated in daily standups and sprint planning"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-purple-900/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development, from junior developer to senior engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900 z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}>
                  <div className="glass glass-hover p-8 rounded-2xl">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          {exp.type}
                        </span>
                      </div>
                      
                      <h4 className="text-xl text-purple-400 font-semibold mb-3">{exp.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-purple-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}>
          {[
            { number: '4+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '100k+', label: 'Users Served' },
            { number: '15+', label: 'Technologies' }
          ].map((stat, index) => (
            <div
              key={index}
              className="glass glass-hover p-6 rounded-xl text-center"
              style={{ animationDelay: `${800 + (index * 100)}ms` }}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
