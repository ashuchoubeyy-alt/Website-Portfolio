import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact_section" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let's build something meaningful
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Reach out for collaboration, consulting, or to discuss opportunities.
          </p>

          <a
            href="mailto:ashutosh.kumar.choubeyy@gmail.com"
            className="btn-accent inline-flex items-center gap-2 text-lg"
          >
            <Mail size={20} />
            Email Ashutosh
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
