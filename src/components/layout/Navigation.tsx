import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/70 dark:bg-black/50 backdrop-blur-xl shadow-lg border-b border-white/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-display text-2xl font-semibold tracking-tight text-foreground"
          >
            Advaith<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  location.pathname === link.path 
                    ? "bg-accent/20 text-accent backdrop-blur-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Advaith_Acharya_Resume.pdf"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground rounded-xl bg-white/50 backdrop-blur-sm border border-white/30"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 bg-white/50 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-accent/20 text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Advaith_Acharya_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-lg font-medium bg-accent text-accent-foreground text-center mt-2 shadow-sm"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
