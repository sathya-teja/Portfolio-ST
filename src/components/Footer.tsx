const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Panyam Sathya Teja. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="https://github.com/sathya-teja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/panyam-sathya-teja/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:panyamsathyateja@gmail.com"
            className="hover:text-white transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
