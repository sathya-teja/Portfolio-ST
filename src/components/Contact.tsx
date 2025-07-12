
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "panyam.sathyateja@email.com",
      link: "mailto:panyam.sathyateja@email.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Remote / Available Worldwide",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="mb-8">
              <h3 className="text-white text-xl font-semibold mb-4">Let's Talk</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, I'll get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`glass glass-hover p-4 rounded-xl flex items-center space-x-4 transition-all duration-500 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-purple-400">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`glass glass-hover border-white/10 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[50px]'}`}>
            <CardHeader>
              <CardTitle className="text-white text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 glass border border-white/20 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 glass border border-white/20 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 glass border border-white/20 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none text-sm"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full glass glass-hover neon-glow py-3 text-base font-medium group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
