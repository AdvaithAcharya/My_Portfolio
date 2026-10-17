import Layout from "@/components/layout/Layout";
import { ShieldCheck, Eye, Network, Trophy, Award, MapPin, Mail, Phone, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Secure Architecture",
      description: "Engineering zero-trust backends, strict fixed-point accounting, and resilient API routing protocols.",
    },
    {
      icon: Eye,
      title: "Applied Computer Vision",
      description: "Integrating real-time OpenCV and MediaPipe pipelines to solve critical healthcare and monitoring problems.",
    },
    {
      icon: Network,
      title: "Scalable Systems",
      description: "Designing multi-tenant distributed endpoints and high-throughput workflows with FastAPI and databases.",
    },
    {
      icon: Trophy,
      title: "Competitive Execution",
      description: "Thriving under high-pressure 24h hackathons to deliver production-grade prototypes from concept to code.",
    },
  ];

  const bioData = [
    { label: "Full Name", value: "Advaith Acharya" },
    { label: "Degree & Major", value: "B.E. Computer Science Engineering (2023 - 2027)" },
    { label: "College / University", value: "SMVITM, Bantakal" },
    { label: "Academic Standing", value: "CGPA: 8.5 / 10" },
    { label: "Email Address", value: "advaith.23cs005@sode-edu.in" },
    { label: "Phone Number", value: "+91 6361473453" },
    { label: "Location", value: "Kundapura, Udupi, Karnataka, 576201" },
    { label: "Languages", value: "English, Kannada, Hindi" },
  ];

  const extracurriculars = [
    "Recognized and appreciated by prominent figures including former Lokayukta Justice Santosh Hegde and notable cine artists.",
    "Winner of multiple district and state-level awards in drawing, singing, and elocution.",
    "Active participant and team lead in regional and national hackathons with rapid technical prototyping.",
  ];

  return (
    <Layout>
      {/* Hero / Overview Section */}
      <section className="section-padding py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Profile Photo Card */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass-card p-2 border border-white/40 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-muted/30 relative">
                  <img
                    src="/profile.png"
                    alt="Advaith Acharya"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/80 dark:bg-black/75 backdrop-blur-md border border-white/30 text-left">
                  <div className="flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-wider mb-1">
                    <GraduationCap size={15} /> SMVITM Bantakal
                  </div>
                  <p className="font-semibold text-sm text-foreground">Computer Science & Engineering</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Class of 2027</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* About Text */}
            <div className="md:col-span-7">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up opacity-0 stagger-1">
                About Me
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 animate-fade-up opacity-0 stagger-2">
                Passionate Engineer & AI Systems Developer
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-up opacity-0 stagger-3 text-base md:text-lg">
                <p>
                  I'm <strong>Advaith Acharya</strong>, a Computer Science Engineering student at 
                  <strong> SMVITM Bantakal</strong>, based in Kundapura, Karnataka. I specialize in building secure, 
                  full-stack applications, scalable RESTful APIs, and integrating state-of-the-art AI / Computer Vision models.
                </p>
                <p>
                  My engineering focus revolves around solving complex, real-world data and monitoring challenges. 
                  Whether building <em>CarePulse</em> for CCTV-based emergency distress detection using OpenCV and FastAPI, 
                  or engineering <em>Krypton</em> as a zero-trust AI security gateway with strict fixed-point accounting, 
                  I am driven to create enterprise-grade software products with measurable impact.
                </p>
                <p>
                  I have been selected for an intensive 3-month corporate training internship at <strong>QSpiders</strong> 
                  (starting February 2027) focusing on modern software development frameworks and industry-standard coding practices.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 animate-fade-up opacity-0 stagger-4">
                <Link
                  to="/resume"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg transition-all"
                >
                  View Full Resume & Qualifications
                </Link>
                <a
                  href="/resume.pdf"
                  download="Advaith_Acharya_Resume.pdf"
                  className="px-6 py-3 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 text-foreground font-medium text-sm hover:bg-white/80 dark:hover:bg-white/20 transition-all"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Data / Personal Information */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-10">
              Personal Information
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {bioData.map((item, index) => (
                <div
                  key={index}
                  className="glass-card flex items-start gap-4 p-5 rounded-2xl group hover:border-accent/30 transition-all"
                >
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Values */}
      <section className="section-padding py-16">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Core Principles
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              What Drives My Engineering
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="glass-card text-center p-7 rounded-3xl group hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extracurricular Achievements & Recognition */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-10 border border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl text-accent border border-accent/20">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">Extracurricular Achievements & Recognition</h3>
                <p className="text-sm text-muted-foreground">Beyond academics and code</p>
              </div>
            </div>

            <div className="space-y-4">
              {extracurriculars.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-white/20">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm md:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Domains */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
              Interests & Passions
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Drawing & Sketching",
                "Singing",
                "Dancing",
                "Playing Piano",
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-white/40 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
