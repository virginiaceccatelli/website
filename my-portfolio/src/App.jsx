import React, { useEffect } from "react";
import { Mail, Linkedin, Github, Globe, ShieldCheck, GraduationCap, Award, ExternalLink, FileDown, MapPin, Phone } from "lucide-react";
import profileImg from "./assets/foto.png";

const THEME = {
  // page + text
  pageBg: "bg-zinc-800",
  pageText: "text-neutral-100",

  // surfaces (cards / rows)
  surface: "bg-zinc-800",
  surfaceBorder: "border-pink-200",
  surfaceHover: "hover:bg-pink-200/15",          // pink-ish on hover
  surfaceRingHover: "hover:ring-1 hover:ring-pink-300",
  transition: "transition-colors",

  // header glass
  headerGlass: "bg-zinc-500/40",

  // badges
  badge: "bg-pink-300/40 text-neutral-100",
  badgeOutline: "bg-zinc-800 border border-pink-200 text-zinc-200",

  // buttons 
  btnPrimary: "bg-pink-200 text-zinc-800 hover:bg-pink-300 border border-pink-200",
  btnOutline: "bg-transparent text-neutral-100 border border-neutral-700 hover:bg-neutral-800",
};

function Button({ asChild, variant = "default", size = "md", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium " + THEME.transition;
  const variants = {
    default: THEME.btnPrimary,
    outline: THEME.btnOutline,
    secondary: "bg-neutral-800 text-neutral-100 border border-neutral-700 hover:bg-neutral-700",
  };
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2" };
  const cls = `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`;
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: `${children.props.className || ""} ${cls}`, ...props });
  }
  return <button className={cls} {...props}>{children}</button>;
}

function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl ${THEME.surfaceBorder} ${THEME.surface} ${THEME.surfaceHover} ${THEME.surfaceRingHover} ${THEME.transition} border ${className}`}>
      {children}
    </div>
  );
}
function CardHeader({ className = "", children }) {
  return <div className={`p-4 text-center ${THEME.surfaceBorder} ${className}`}>{children}</div>;
}
function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
function CardContent({ className = "", children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function Badge({ variant = "secondary", className = "", children }) {
  const variants = { secondary: THEME.badge, outline: THEME.badgeOutline };
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${variants[variant] || ""} ${className}`}>{children}</span>;
}


/* Smooth scroll */
function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        const id = a.getAttribute("href");
        const el = id && document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", id);
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

export default function Portfolio() {
  useSmoothScroll();

  // — Personalized fields —
  const NAME = "Virginia Ceccatelli";
  const TAGLINE = "Cybersecurity | AI Governance | Emerging Technologies";
  const ROLE = "Computer Science Student at McGill University";
  const LOCATION = "Montreal, Canada";
  const EMAIL = "virginia.ceccatelli@mail.mcgill.ca";
  const LINKEDIN = "https://www.linkedin.com/in/virginia-ceccatelli/";
  const GITHUB = "https://github.com/virginiaceccatelli";
  const RESUME_URL = "https://drive.google.com/file/d/1fwcGDuo_LJed4UKyVGelHhrmCWrCrkTJ/view?usp=sharing";
  const PHONE = ""; // optional

  const skills = {
    Languages: [
      { name: "Python", level: "Experienced" },
      { name: "Java", level: "Experienced" },
      { name: "Assembly", level: "Intermediate" },
      { name: "C/C++", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
    ],
    "Security & Networking": [
      { name: "Nmap", level: "Intermediate" },
      { name: "Wireshark", level: "Intermediate" },
      { name: "Burp Suite", level: "Working" },
      { name: "Metasploit", level: "Working" },
      { name: "OpenSSL / TLS", level: "Working" },
      { name: "Kali Linux", level: "Intermediate" },
    ],
    "Platforms & Tools": [
      { name: "Linux", level: "Working" },
      { name: "Docker", level: "Working" },
      { name: "Cisco Packet Tracer", level: "Intermediate" },
      { name: "Git & GitHub", level: "Experienced" },
    ],
  };

  const courses = [
    "DSA - COMP251",
    "Operating Systems - COMP310",
    "Applied Machine Learning - COMP551",
    "Theory of Computation - COMP330",
    "Computer Networks - COMP535",
    "Applied Robotics - COMP517",
    "Database Systems - COMP420",
  ];

  const achievements = [
    { title: "CompTIA Network+ (N10-009) Full Course", org: "Udemy / Dion Training Solutions", year: "2025" },
    {title: "KPMG Data Analytics Virtual Internship on Forage", org: "Forage", year: "2023"},
  ];

  const projects = [
    {
      title: "Reinforcement-Learning Data Preprocessing Pipeline Automation",
      blurb: "RL-driven data quality checks: outlier detection, imputation, and financial validity rules.",
      tags: ["RL", "Pandas", "Sklearn"],
      repo: null,
      demo: "",
    },

    {
      title: "Robotic Ground Segmentation and Motion Decision",
      blurb: "Robotic empty space detection and CNN direction generation for robot navigation.",
      tags: ["Pytorch", "TorchScript", "OpenCV"],
      repo: "https://github.com/virginiaceccatelli/vision_control",
      demo: "",
    },
    {
      title: "Cisco SOHO Network Simulation",
      blurb: "Small Office, Home Office Network Configuration on Cisco Packet Tracer Platform.",
      tags: ["Cisco", "Subnetting", "Routing"],
      repo: "https://github.com/virginiaceccatelli/Cisco-Packet-Tracer-Projects",
      demo: "",
    },
  ];

  const nav = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#experience", label: "Experience" },
    { id: "#learning", label: "Learning" },
    { id: "#portfolio", label: "Portfolio" },
    { id: "#writing", label: "Writing" },
  ];

  return (
    <>
      {/* Top Nav */}
      <header className={`sticky top-0 z-50 backdrop-blur ${THEME.headerGlass}`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{NAME.split(" ")[0].toUpperCase()}</a>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={n.id} className="hover:opacity-80">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={RESUME_URL} className="flex items-center text-gray-300"><FileDown className="h-4 w-4 mr-2" />CV</a>
            </Button>
          </div>
        </div>
      </header>

      <main className={`snap-y snap-mandatory h-screen overflow-y-auto relative ${THEME.pageBg} ${THEME.pageText}`}>
      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-16 pb-8 md:pt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
          <p className="text-sm uppercase tracking-widest opacity-90">Hello, I'm</p>
          <div className="mt-2 flex items-center gap-4">
            <img
              src={profileImg}
              alt={NAME}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-gray-700 shadow-sm"
              />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{NAME}</h1>
          </div>
          <p className="mt-2 text-lg opacity-90">{ROLE}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {TAGLINE.split("|").map((t) => (
                <Badge key={t.trim()} variant="secondary" className="px-3 py-1">{t.trim()}</Badge>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <a href="#portfolio">View Projects</a>
              </Button>
              <Button asChild variant="outline">
                <a href={GITHUB} className="flex items-center"><Github className="h-4 w-4 mr-2" />GitHub</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm opacity-80">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{LOCATION}</span>
              {PHONE ? <span className="flex items-center gap-2"><Phone className="h-4 w-4" />{PHONE}</span> : null}
            </div>
          </div>
          <div className="md:justify-self-end">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2"><ShieldCheck className="h-5 w-5" /> Focus Areas</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3">
                {[
                  "Network Defense",
                  "Pentesting & Web Sec",
                  "Threat Modeling",
                  "AI Security",
                  "Privacy & Governance",
                  "Secure Systems",
                ].map((s) => (
                  <Badge key={s} variant="outline" className="justify-start px-3 py-2 rounded-xl">{s}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-4">
        <div className="grid md:grid-cols-3 gap-6 items-start py-20 md:py-26">
          <Card className="md:col-span-2">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2"><GraduationCap className="h-5 w-5" /> About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 leading-relaxed">
              <p>
                I'm a Computer Science student with a strong interest in cybersecurity, computer networks,
                and AI governance. Originally trained in International Relations at IE University, I developed a strong interest in
                the societal dimensions of technology, particularly how global events intersect with
                cybersecurity threats. This curiosity led me to shift focus and pursue a BA in Computer
                Science with a Minor in Economics at McGill University, where I’ve been able to explore the
                technical underpinnings of cybersecurity, machine learning, and systems programming.
                The decision to pivot was not only academic, but it was a personal commitment to
                developing the skills needed to address the security challenges that come with emerging
                technologies and a quickly changing digital landscape.
              </p>
              <p>
                I applied statistical modeling and data analysis to examine links between spikes in ransomware
                attacks originating from North Korea, China, Russia, and Iran, and political elections in the
                West. More recently, I led the development of a Reinforcement Learning Algorithm to automate data cleaning, improving the accuracy and
                completeness of financial datasets, and reducing manual preprocessing time. I also designed a ground segmentation and motion
                planning system for hospital robots at the McGill Prometheus Lab.
              </p>
              <p>
                I'm eager to develop my skills and gain more experience in the field of cybersecurity. I bring a deep motivation to understand emerging security
                threats and make technology more secure, equitable, and intelligent. 
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>At a Glance</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5 text-sm">
              <div className="flex items-center gap-3"><Award className="h-4 w-4" /> Computer Science Major, Economics Minor</div>
              <div className="flex items-center gap-3"><Award className="h-4 w-4" /> Dean’s List, top 10% - IE University</div>
              <div className="flex items-center gap-3"><Award className="h-4 w-4" /> Girls Who Code Python Instructor </div>
              <div className="flex items-center gap-3"><Award className="h-4 w-4" /> Girls Who Code VP Internal - McGill</div>
              <div className="flex items-center gap-3"><Award className="h-4 w-4" /> Member of Women In Tech Club - McGill</div>
              <div className="flex items-center gap-3"><Award className="h-4 w-4" /> Andalus Committee NYC Researcher</div>
            </CardContent>
          </Card>
        </div>
      </section>

        {/* Experience / Skills */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl md:text-6xl text-center mb-6 py-20 md:py-28">Experiences & Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([group, items]) => (
              <Card key={group}>
                <CardHeader>
                  <CardTitle>{group}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  {items.map((s) => (
                    <div key={s.name} className="flex items-center justify-between rounded-xl px-3 py-2">
                      <span>{s.name}</span>
                      <Badge variant="secondary" className="rounded-full">{s.level}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning & Achievements */}
        <section id="learning" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl md:text-6xl text-center mb-6 py-20 md:py-28">Learning & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2"><ShieldCheck className="h-5 w-5" /> McGill Courses Taken </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                {courses.map((l) => (
                  <div key={l} className="flex items-center gap-2 border rounded-xl px-3 py-2">
                    <span>{l}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex justify-center items-center gap-2"><Award className="h-5 w-5" /> Certifications & Courses</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {achievements.map((a) => (
                  <div key={a.title} className="border rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <strong>{a.title}</strong>
                      <Badge variant="outline">{a.year}</Badge>
                    </div>
                    <div className="opacity-70 text-sm">{a.org}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid place-items-center gap-2 mb-6 py-20 md:py-28">
          <h2 className="text-xl md:text-6xl text-center">My Recent Projects</h2>
          <a
            href={GITHUB}
            className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 underline underline-offset-4"
          >
            <Github className="h-4 w-4" />
            See more
          </a>
        </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Card key={p.title}>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="opacity-90">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {p.repo && (
                      <Button asChild variant="outline" size="sm">
                        <a href={p.repo} className="flex items-center">
                          <Github className="h-4 w-4 mr-2" /> Repo
                        </a>
                      </Button>
                    )}
                    {p.demo && (
                      <Button asChild size="sm">
                        <a href={p.demo} className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" /> Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Papers & Articles */}
        <section id="writing" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl md:text-6xl text-center mb-6 py-20 md:py-28">Papers & Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* optional: link to a full list */}
            {/* <a className="text-sm opacity-80 hover:opacity-100 underline" href="/papers">All writing →</a> */}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Item */}
            <Card>
              <CardHeader>
                <CardTitle>Sky Diplomacy: The Geopolitical Impact of the
  Proliferation of Iranian-Russian Military Drone
  Trade on Global Alliances and Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="opacity-90">
                Focusing on the historical
  context of Iranian trade with Russia and China, as well as recent developments, the study analyzes how armed UAV
  drones are contributing to the shifting world order, wherein Russia and China are increasingly taking on a leading role,
  and how this is impacting the West from various points of view.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UAV</Badge>
                  <Badge variant="secondary">Policy</Badge>
                  <Badge variant="secondary">Security</Badge>
                </div>
                <div className="text-sm opacity-80">
                  2024 • Article • <a className="underline" href="https://ipr.blogs.ie.edu/wp-content/uploads/sites/574/2024/02/Sky-Diplomacy-Final-Draft.docx-1.pdf" target="_blank" rel="noreferrer">PDF</a>
                </div>
              </CardContent>
            </Card>

            {/* Item */}
            <Card>
              <CardHeader>
                <CardTitle>CNN Robotic Vision for Ground Segmentation - U-Net Applicability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="opacity-90">
                This project implements a model that performs ground segmentation using a U-Net model and determines a robot's directional movement decision based on obstacle-free zones. This approach is purely vision-based, portable, and computationally lightweight - it might be useful for prototyping computer vision for robotic navigation on simple laptops.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Robotics</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">Convolutional Neural Networks</Badge>
                </div>
                <div className="text-sm opacity-80">
                  2025 • Paper • <a className="underline" href="https://github.com/virginiaceccatelli/vision_control/blob/0342db46154deaa66b9efd0b815eb435e5a7202a/Project%20Paper/Robotic_Vision_Paper.pdf" target="_blank" rel="noreferrer">Link</a>
                </div>
              </CardContent>
            </Card>

            {/* Add more items by copy/paste */}
          </div>
        </section>

        <footer className="bg-zinc-700">
          <div className="py-4 mx-auto max-w-6xl text-sm opacity-80 text-center">
            © {new Date().getFullYear()} {NAME}. All rights reserved.
          </div>
          <div className="py-4 mx-auto max-w-6xl px-4 py-2 text-sm opacity-80 text-center">
            virginia.ceccatelli@mail.mcgill.ca | <a className="underline" href="https://www.linkedin.com/in/virginia-ceccatelli/">LinkedIn</a>
          </div>
        </footer>
      </main>
    </>
  );
}
