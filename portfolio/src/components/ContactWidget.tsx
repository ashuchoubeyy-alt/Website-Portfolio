import { Mail, Phone, MessageCircle } from 'lucide-react';

const ContactWidget = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      <a
        href="mailto:ashutosh.kumar.choubeyy@gmail.com"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
        title="Email"
      >
        <Mail size={20} />
      </a>

      <a
        href="tel:7202057461"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
        title="Phone"
      >
        <Phone size={20} />
      </a>

      <button
        onClick={scrollToContact}
        className="btn-accent w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
        title="Contact"
      >
        <MessageCircle size={20} />
      </button>
    </div>
  );
};

export default ContactWidget;
