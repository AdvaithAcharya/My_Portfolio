import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/AdvaithAcharya", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/advaithacharya16", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=advaith.23cs005@sode-edu.in", label: "Gmail" },
  ];

  return (
    <footer className="relative mt-auto">
      <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border-t border-white/30">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Link to="/" className="font-display text-xl font-semibold text-foreground">
                Advaith<span className="text-accent">.</span>
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                Computer Science & Engineering • SMVITM Bantakal
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="p-3 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/30 text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                >
                  <link.icon size={18} />
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Advaith_Acharya_Resume.pdf"
                title="Download Resume"
                className="p-3 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Download size={18} />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Advaith Acharya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
