import { ArrowRight, MapPin, Mail, Phone, Briefcase } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const infoItems = [
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
    { icon: Mail, label: 'Email', value: 'ashutosh.kumar.choubeyy@gmail.com' },
    { icon: Phone, label: 'Phone', value: '7202057461' },
    { icon: Briefcase, label: 'Role', value: 'Associate Consultant' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h1 className="huge-heading mb-4">
                Ashutosh Kumar Choubey
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Technology Consultant
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                I bring a strong foundation in project management with a focus on cybersecurity,
                helping organizations align and execute complex initiatives effectively. I've built
                and led governance structures that streamline delivery, ensure compliance, and
                support informed decision-making.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact_section')}
                className="btn-accent flex items-center gap-2"
              >
                Get in touch
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="glass px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/5"
              >
                View projects
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass p-8 bg-hero-grad min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-5xl font-bold mb-4">
                  AK
                </div>
                <p className="text-secondary">Technology Consultant</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="glass p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} className="text-blue-400" />
                      <span className="text-sm text-secondary">{item.label}</span>
                    </div>
                    <p className="text-sm font-semibold break-words">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
