
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

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
  company: "Technotran Solutions",
  position: "AI & ML Intern",
  duration: "June 2025 - Present",
  location: "Remote",
  description: "Currently undergoing a short-term internship focused on Artificial Intelligence and Machine Learning using Python. Actively learning model development, data processing, and cloud integration techniques through hands-on projects.",
  achievements: [
    "Learning to build and evaluate ML models using Scikit-Learn",
    "Working on image classification and NLP tasks with TensorFlow",
    "Engaged in a real-world AI/ML capstone project (in progress)"
  ]
},

   {
  company: "IEEE Student Branch, NBKRIST",
  position: "Website Contributor",
  duration: "Sep 2024 – Oct 2024",
  location: "On-Campus",
  description: "Contributed to the official IEEE SB NBKRIST website, focusing on frontend development and content updates for student activities and technical events.",
  achievements: [
    "Developed responsive and accessible pages using HTML, CSS, and JavaScript",
    "Collaborated with the student team to update event schedules and member listings",
    "Ensured clean UI/UX aligned with IEEE branding standards"
  ]
}

  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-700 ${
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-purple-400 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                <Briefcase className="w-2 h-2 text-white" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="glass glass-hover p-6 rounded-xl">
                  <div className="flex flex-col space-y-2 mb-4">
                    <h3 className="text-white text-lg font-semibold">{exp.position}</h3>
                    <h4 className="text-purple-400 font-medium">{exp.company}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
