import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'National Forensic Sciences University',
      degree: 'MBA-Business Intelligence & Business Analyst',
      period: 'May 2021 - May 2023'
    },
    {
      school: 'Maharaja Sayajirao University',
      degree: 'Bachelor of Commerce',
      period: 'May 2018 - Dec 2021'
    }
  ];

  const certifications = [
    'ISO 31000 Risk Management',
    'Project Management certification',
    'Google Data analytics',
    'Analytics & Visualization tools on Power BI',
    'Python-Intermediate level',
    'SQL'
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{edu.school}</p>
                    <p className="text-secondary text-sm">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary">
                  <span className="text-blue-400 mt-1 flex-shrink-0">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
