import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Download, Sparkles, Shield, Cpu, Activity, Award, Code2, Database, Terminal, CheckCircle2 } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "CarePulse",
      subtitle: "Smart Patient Monitoring System",
      description:
        "Full-stack monitoring system utilizing OpenCV and secure FastAPI routing to detect patient distress via CCTV and trigger low-latency emergency escalations.",
      tags: ["OpenCV", "FastAPI", "Python", "Computer Vision", "Real-Time"],
      icon: Activity,
      highlight: "AI-Powered Healthcare",
    },
    {
      title: "Krypton",
      subtitle: "AI Security Gateway & FinOps Dashboard",
      description:
        "Engineered a zero-trust backend gateway and dynamic React.js dashboard using strict fixed-point accounting to intercept malicious requests and visualize real-time token telemetry.",
      tags: ["React.js", "TypeScript", "AI Security", "Zero-Trust", "FinOps"],
      icon: Shield,
      highlight: "Zero-Trust Architecture",
    },
    {
      title: "LifelineMesh",
      subtitle: "Emergency Resource Protocol",
      description:
        "Developed a real-time tracking backend and multi-tenant API routing protocol to synchronize critical medical resource data across distributed healthcare facilities.",
      tags: ["FastAPI", "Distributed Systems", "Multi-Tenant API", "Python", "MongoDB"],
      icon: Cpu,
      highlight: "Distributed Routing",
    },
  ];

  const domains = [
    {
      title: "AI & Computer Vision",
      desc: "OpenCV, MediaPipe, CCTV distress detection & AI vision pipelines",
      icon: Cpu,
    },
    {
      title: "Backend Architecture",
      desc: "FastAPI, RESTful APIs, secure routing & backend workflow design",
      icon: Terminal,
    },
    {
      title: "Frontend Engineering",
      desc: "React.js, TypeScript, Tailwind CSS & responsive UI architectures",
      icon: Code2,
    },
    {
      title: "Databases & DevOps",
      desc: "MongoDB Atlas, SQL, Docker, Postman, Git & GitHub",
      icon: Database,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden py-12 md:py-20">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent text-sm font-medium mb-6 animate-fade-up opacity-0 stagger-1">
                <Sparkles size={16} />
                Computer Science Engineer & AI Systems Builder
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 animate-fade-up opacity-0 stagger-2">
                Hello, I'm <br />
                <span className="italic text-accent">Advaith Acharya</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up opacity-0 stagger-3">
                Computer Science Engineering student at <strong>SMVITM</strong> specializing in secure, 
                full-stack application development, scalable FastAPI backends, and AI/computer vision model integration.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-4">
                <Link
                  to="/resume"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:gap-4"
                >
                  Explore Resume
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="/resume.pdf"
                  download="Advaith_Acharya_Resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 text-foreground font-medium rounded-full hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/20 text-sm text-muted-foreground animate-fade-up opacity-0 stagger-5">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  Open to Work
                </span>
                <span>•</span>
                <span>Kundapura, Karnataka, India</span>
              </div>
            </div>

            {/* Right Profile Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Decorative glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/40 via-amber-500/20 to-purple-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

                <div className="relative glass-card rounded-3xl p-3 border border-white/40 shadow-2xl overflow-hidden">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted/40 relative">
                    <img
                      src="/profile.png"
                      alt="Advaith Acharya"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 dark:bg-black/70 backdrop-blur-md border border-white/30 text-left">
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-0.5">
                      SMVITM Bantakal (2023 - 2027)
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      B.E. Computer Science & Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2 bg-white/30 backdrop-blur-sm">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "8.5", label: "Engineering CGPA", sub: "SMVITM Bantakal" },
              { number: "3+", label: "Technical Projects", sub: "Production & Research" },
              { number: "7+", label: "Hackathons Reached", sub: "National & Regional" },
              { number: "Prize", label: "MITK AI Vision 24H", sub: "Consolation Award" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:scale-105 transition-all duration-500"
              >
                <div className="font-display text-4xl md:text-5xl font-semibold text-accent mb-1 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-foreground font-medium text-sm md:text-base">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">
                Engineering Showcase
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold">
                Technical Projects
              </h2>
            </div>
            <Link
              to="/resume"
              className="group inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              See all qualifications & hackathons
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-3xl p-7 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 bg-accent/10 rounded-2xl text-accent border border-accent/20 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs uppercase font-semibold tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {project.highlight}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20 dark:border-white/10">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-white/40 dark:bg-white/10 text-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specializations */}
      <section className="section-padding bg-black/5 dark:bg-white/5 py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Core Domains
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
                Specialized in High-Performance Systems
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From computer vision pipelines with OpenCV to zero-trust API architectures 
                with FastAPI and dynamic React frontends, I engineer systems that solve 
                real-world monitoring and data challenges.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Computer Vision & Real-Time Monitoring",
                  "Secure RESTful APIs & Backend Architecture",
                  "Zero-Trust Telemetry & Modern Frontends",
                  "Rapid Prototyping in Competitive Hackathons",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all duration-300"
              >
                More about my background & journey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-2xl group hover:border-accent/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{domain.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{domain.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons & Accolades Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-accent/20">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                  <Award size={14} /> Hackathons & Competitive Engineering
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                  MITK AI VISION 24H Hackathon Winner & Finalist in 7+ Regional Contests
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Consistently recognized for rapid prototyping, architecture, and high-pressure software execution in events like Anveshana Prototype Competition, Matrix-Fusion Hackathon, Ayush-Habba, and Hackothsava.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-xl transition-all"
                >
                  View Details in Resume
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-amber-500/10 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Let's Build Something Impactful
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Currently open to software engineering internships, open-source collaborations, and research opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 animate-pulse-glow"
                >
                  Get in Touch
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="/resume.pdf"
                  download="Advaith_Acharya_Resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 text-foreground font-medium rounded-full hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
