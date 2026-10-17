import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out, Advaith will get back to you shortly.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "advaith.23cs005@sode-edu.in",
      href: "mailto:advaith.23cs005@sode-edu.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6361473453",
      href: "tel:+916361473453",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kundapura, Udupi, Karnataka, 576201",
      href: "https://maps.google.com/?q=Kundapura,Udupi,Karnataka",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/advaithacharya16" },
    { icon: Github, label: "GitHub", href: "https://github.com/AdvaithAcharya" },
    { icon: Mail, label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=advaith.23cs005@sode-edu.in" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Let's Connect & Collaborate
            </h1>
            <p className="text-muted-foreground text-lg">
              Have an internship opportunity, a project idea, or want to discuss AI systems? Reach out anytime!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-0 py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-3xl p-6">
                <h2 className="font-display text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-2">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                        <info.icon className="text-accent" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors break-words text-sm md:text-base">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Social & Profiles</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-4 bg-white/40 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon size={22} className="text-foreground hover:text-accent" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Status & Resume Card */}
              <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                    <span className="font-semibold text-foreground">Open to Work</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Open for software engineering internships, research fellowships, and open-source contributions.
                  </p>
                  <a
                    href="/resume.pdf"
                    download="Advaith_Acharya_Resume.pdf"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    <Download size={16} />
                    Download Official Resume (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-semibold mb-6">Send a Direct Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground/60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground/60"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground/60"
                      placeholder="Internship / Collaboration / Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/60"
                      placeholder="Hi Advaith, I'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:gap-4"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
