const About = () => {
  const skills = {
    core: ['Project Governance', 'Stakeholder Alignment', 'Business Process Optimization', 'Vulnerability Management'],
    tools: ['JIRA', 'Confluence', 'SQL', 'Power BI', 'Python']
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="glass p-8 sticky top-24">
              <h2 className="section-heading text-3xl mb-4">About</h2>
              <p className="text-secondary leading-relaxed">
                I bring a strong foundation in project management with a focus on cybersecurity,
                helping organizations align and execute complex initiatives effectively. I've built
                and led governance structures that streamline delivery, ensure compliance, and
                support informed decision-making.
              </p>
              <p className="text-secondary leading-relaxed mt-4">
                My strength lies in bridging the gap between technical and non-technical teams,
                fostering collaboration, and driving outcomes that align with business goals and
                regulatory expectations.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="glass p-8">
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-secondary leading-relaxed">
                Associate Consultant with experience aligning complex cybersecurity initiatives
                with organizational goals. Expertise in establishing project governance frameworks,
                utilizing Jira/Confluence to manage remediation across 700+ applications. Skilled
                in business process modeling and technology assessments, demonstrated by designing
                interactive application frameworks for AgriTech startups.
              </p>
              <p className="text-secondary leading-relaxed mt-4">
                Led end-to-end digital transformations in the automotive sector, streamlining
                operations using digital technologies. Proficient in vendor evaluation and selection,
                partnering with clinical/IT teams to identify gaps and recommend tailored tech
                solutions. Contributed to pre-sales activities, developing persuasive Points of View
                (PoVs) and detailed RFP/RFI responses.
              </p>
              <p className="text-secondary leading-relaxed mt-4">
                Knowledgeable in data analytics and visualization tools, including Google Data
                Analytics and Power BI. Adept at cross-functional collaboration, ensuring stakeholder
                alignment and driving project success.
              </p>
            </div>

            <div className="glass p-8">
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-blue-400">Core Competencies</h4>
                  <ul className="space-y-3">
                    {skills.core.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-secondary">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-blue-400">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
