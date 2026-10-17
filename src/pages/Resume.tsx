import Layout from "@/components/layout/Layout";
import { Briefcase, GraduationCap, Award, Download, Trophy, Code2, FolderGit2, CheckCircle2 } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Upcoming Intern (Trainee)",
      company: "QSpiders",
      period: "Starting February 2027",
      location: "Bangalore / Remote",
      description:
        "Selected for an intensive 3-month corporate training program focusing on modern software development frameworks, enterprise architectures, and industry-standard coding practices.",
    },
  ];

  const hackathons = [
    {
      title: "MITK AI VISION 24H Hackathon",
      award: "Consolation Prize Winner",
      organizer: "MITK, Kundapura",
      period: "24-Hour Hackathon",
      description:
        "Engineered an AI-driven computer vision solution under strict 24-hour time constraints, recognized as a top contender for technical execution, low-latency processing, and system architecture.",
    },
    {
      title: "National & Regional Competitions",
      award: "Consistent Finalist & Prototype Contender",
      organizer: "Multiple Institutes & Bodies",
      period: "2023 - Present",
      description:
        "Consistently reached final evaluation rounds for rapid prototyping and high-quality software execution in Anveshana Prototype Competition, Matrix-Fusion Hackathon, Ayush-Habba, Hackothsava, CodeMeet, and Hack.io.",
    },
  ];

  const projects = [
    {
      title: "CarePulse",
      subtitle: "Smart Patient Monitoring System",
      stack: ["OpenCV", "FastAPI", "Python", "React.js", "Tailwind CSS"],
      description:
        "Built a full-stack monitoring system utilizing OpenCV and secure FastAPI routing to detect patient distress via CCTV feeds and trigger low-latency emergency escalations.",
    },
    {
      title: "Krypton",
      subtitle: "AI Security Gateway & FinOps Dashboard",
      stack: ["React.js", "TypeScript", "FastAPI", "Zero-Trust", "Telemetry"],
      description:
        "Engineered a zero-trust backend gateway and dynamic React.js dashboard using strict fixed-point accounting to intercept malicious requests and visualize real-time token telemetry.",
    },
    {
      title: "LifelineMesh",
      subtitle: "Emergency Resource Protocol",
      stack: ["FastAPI", "Distributed Systems", "Multi-Tenant API", "MongoDB Atlas"],
      description:
        "Developed a real-time tracking backend and multi-tenant API routing protocol to synchronize critical medical resource data across distributed healthcare facilities.",
    },
  ];

  const education = [
    {
      degree: "B.E. in Computer Science Engineering",
      institution: "SMVITM, Bantakal",
      period: "2023 – 2027",
      score: "CGPA: 8.5 / 10",
      description:
        "Specializing in secure, full-stack application development, backend systems, scalable RESTful APIs, data structures & algorithms, and computer vision model integrations.",
    },
    {
      degree: "PUC / 12th Grade (Science)",
      institution: "RNS PU College, Kundapura",
      period: "2021 – 2023",
      score: "Percentage: 86%",
      description:
        "Completed Pre-University education with focused coursework in Physics, Chemistry, Mathematics, and Computer Science.",
    },
    {
      degree: "SSLC / 10th Grade",
      institution: "Govt High School, Basrur",
      period: "2018 – 2021",
      score: "Percentage: 95%",
      description:
        "Graduated with distinction with top academic honors in mathematics and general sciences.",
    },
  ];

  const skills = {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["FastAPI", "RESTful API Development", "Backend Workflow Design"],
    databases: ["MongoDB Atlas", "SQL"],
    tools: ["Git", "GitHub", "Docker", "Postman", "OpenCV", "MediaPipe"],
    core: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "API Integration",
      "Database Management",
      "Problem Solving",
      "Zero-Trust Architecture",
    ],
  };

  const awards = [
    "MITK AI VISION 24H Hackathon — Consolation Prize Winner",
    "Finalist in Anveshana Prototype Competition & Regional Hackathons",
    "Recognized and appreciated by prominent figures including former Lokayukta Justice Santosh Hegde and notable cine artists",
    "Winner of multiple district and state-level awards in drawing, singing, and elocution",
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Curriculum Vitae
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Resume & Qualifications
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Detailed technical background, projects, hackathon achievements, and educational record for <strong>Advaith Acharya</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Advaith_Acharya_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <Download size={18} />
                Download PDF Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 font-medium rounded-full hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-300"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Projects Section */}
      <section className="section-padding pt-0 py-12">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl">
              <FolderGit2 className="text-accent" size={26} />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold">Technical Projects</h2>
              <p className="text-sm text-muted-foreground">Architected and engineered end-to-end</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{proj.title}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{proj.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20">
                  {proj.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/40 dark:bg-white/10 text-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons & Competitive Engineering Section */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl">
              <Trophy className="text-accent" size={26} />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold">Hackathons & Competitive Engineering</h2>
              <p className="text-sm text-muted-foreground">Recognized in national and regional innovation challenges</p>
            </div>
          </div>

          <div className="space-y-6">
            {hackathons.map((hack, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent shadow-lg shadow-accent/30" />
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{hack.title}</h3>
                      <p className="text-accent font-medium text-sm">
                        {hack.award} • {hack.organizer}
                      </p>
                    </div>
                    <span className="px-4 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full backdrop-blur-sm">
                      {hack.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{hack.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl">
              <Briefcase className="text-accent" size={26} />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold">Experience & Internships</h2>
              <p className="text-sm text-muted-foreground">Corporate training and industry selections</p>
            </div>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent shadow-lg shadow-accent/30" />
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{job.title}</h3>
                      <p className="text-accent font-medium text-sm">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <span className="px-4 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full backdrop-blur-sm">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl">
              <GraduationCap className="text-accent" size={26} />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold">Education</h2>
              <p className="text-sm text-muted-foreground">Academic qualifications and honors</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {edu.period}
                    </span>
                    <span className="text-xs font-semibold text-accent">{edu.score}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl">
              <Code2 className="text-accent" size={26} />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold">Technical Skills</h2>
              <p className="text-sm text-muted-foreground">Languages, frameworks, tools, and paradigms</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4 text-accent">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/40 dark:bg-white/10 rounded-xl text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4 text-accent">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/40 dark:bg-white/10 rounded-xl text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4 text-accent">Backend & APIs</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/40 dark:bg-white/10 rounded-xl text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4 text-accent">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/40 dark:bg-white/10 rounded-xl text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4 text-accent">Libraries & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/40 dark:bg-white/10 rounded-xl text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4 text-accent">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/40 dark:bg-white/10 rounded-xl text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Extracurricular Achievements */}
      <section className="section-padding py-12">
        <div className="container-custom">
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-accent/20">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="text-accent" size={26} />
              Key Achievements & Distinctions
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium leading-relaxed">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
