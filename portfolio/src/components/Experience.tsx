import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="glass p-8 hover:bg-white/5 transition-all duration-300 animate-slide-right">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Associate Consultant</h3>
                  <p className="text-blue-400 font-semibold">Ernst & Young LLP</p>
                  <p className="text-secondary text-sm">Bangalore, India</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-secondary">
                <Calendar size={18} />
                <span className="font-medium">Feb 2023 - Present</span>
              </div>
            </div>

            <div className="space-y-4 ml-0 md:ml-16">
              <div className="border-l-2 border-blue-500/30 pl-6 py-2">
                <h4 className="font-semibold text-lg mb-2">Cybersecurity PMO Lead – Financial Services (Goldman Sachs)</h4>
                <p className="text-secondary leading-relaxed">
                  Led cybersecurity VAPT and issue validation program PMO, managing remediation
                  across 700+ applications and vendor delivery.
                </p>
              </div>

              <div className="border-l-2 border-blue-500/30 pl-6 py-2">
                <h4 className="font-semibold text-lg mb-2">Governance & Compliance</h4>
                <p className="text-secondary leading-relaxed">
                  Implemented governance via Jira/Confluence, ensuring timely vulnerability closure
                  and stakeholder alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
