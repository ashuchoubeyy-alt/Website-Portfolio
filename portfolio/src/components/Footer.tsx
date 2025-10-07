const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center text-secondary">
        <p>&copy; {currentYear} Ashutosh Kumar Choubey — Built with care.</p>
      </div>
    </footer>
  );
};

export default Footer;
