import { Layers, Sprout, Car } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Layers,
      title: 'Governance & Remediation Dashboard',
      description: 'Designed and implemented Jira-driven remediation tracking across 700+ applications, providing real-time visibility into vulnerability management and stakeholder alignment.'
    },
    {
      icon: Sprout,
      title: 'AgriTech App Framework',
      description: 'Interactive customer-facing application framework for an AgriTech startup, enabling seamless user engagement and data-driven agricultural insights.'
    },
    {
      icon: Car,
      title: 'Automotive Digital Transformation',
      description: 'Led end-to-end digital transformation initiative to streamline operations, enhance efficiency, and drive innovation in the automotive sector.'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="glass p-8 hover:-translate-y-2 transition-all duration-300 hover:bg-white/5 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-secondary leading-relaxed">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
