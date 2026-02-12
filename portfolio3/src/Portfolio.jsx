import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img from "./image/me.png";
import { AnimatePresence } from "framer-motion";
import WelcomeLoader from "./Welcome";
import img1 from "./image/img1.png"
import img2 from "./image/img2.png"
import img3 from "./image/img3.png"
import img4 from "./image/img4.png"
import img5 from "./image/img5.png"
import img6 from "./image/img6.png"
import img7 from "./image/img7.png"
import img8 from "./image/img8.png"
// import WelcomeLoader from "./WelcomeLoader";

const TABS = ["ALL PROJECTS", "WEB", "PORTFOLIO", "DESIGN", "EDIT"];

const PROJECTS = {
  WEB: [
    {
      title: "ElevateU",
      image: img1,
      desc: "Student career guidance platform",
      link: "https://example.com",
    },
    {
      title: "Fit Dish",
      image: img2,
      desc: "Healthy food landing page",
      link: "https://example.com",
    },
    {
      title: "Prescripto",
      image: img3,
      desc: "Doctor appointment booking website",
      link: "https://example.com",
    },
  ],

  DESIGN: [
    {
      title: "UI Concept",
      image: img6,
      desc: "Modern UI design exploration",
      link: "#",
    },
    {
      title: "Landing Page",
      image: img7,
      desc: "Clean marketing website design",
      link: "#",
    },
  ],

  PORTFOLIO: [
    {
      title: "Personal Portfolio",
      image: img5,
      desc: "Cinematic portfolio website",
      link: "#",
    },
  ],

  EDIT: [
    {
      title: "Video Reel",
      image: img8,
      desc: "High-end cinematic video editing",
      link: "#",
    },
    {
      title: "Video Reel",
      image: img8,
      desc: "High-end cinematic video editing",
      link: "#",
    },
    {
      title: "Video Reel",
      image: img8,
      desc: "High-end cinematic video editing",
      link: "#",
    },
  ],
};
const education = [
  {
    id: 1,
    title: "Master of Computer Application",
    college: "Indira gandhi institute of technology",
    year: "2023 – 2025",
    location: "Sarang",
  },
  {
    id: 2,
    title: "Bachelor of Science",
    college: "Banki Autonomous College",
    year: "2020 – 2023",
    location:"Banki",
  },
  {
    id: 3,
    title: "Intermediate Science",
    college: "Prananath Autonomous College",
    year: "2020",
    location:"Khordha",
  },
  {
    id: 4,
    title: "matriculation",
    college: "Saraswati Shishu Vidya Mandir",
    year: "2018",
    location:"Jatni",
  },
];

export default function Portfolio() {
  const containerRef = useRef(null);
const [loading, setLoading] = useState(false);
const firstSectionRef = useRef(null);
const secondSectionRef = useRef(null);
const autoScrollUsed = useRef(false);
const [showNav, setShowNav] = useState(false);
const [activeTab, setActiveTab] = useState("ALL PROJECTS");

  const items =
    activeTab === "ALL PROJECTS"
      ? Object.values(PROJECTS).flat()
      : PROJECTS[activeTab];


useEffect(() => {
  if (loading) return;

  let userScrolled = false;

  const onUserScroll = () => {
    userScrolled = true;
  };

  window.addEventListener("wheel", onUserScroll, { once: true });
  window.addEventListener("touchmove", onUserScroll, { once: true });

  const timer = setTimeout(() => {
    if (!userScrolled && !autoScrollUsed.current) {
      autoScrollUsed.current = true;
      secondSectionRef.current?.scrollIntoView({
        behavior: "smooth",
      });
      setShowNav(true);
    }
  }, 2000);

  return () => {
    clearTimeout(timer);
    window.removeEventListener("wheel", onUserScroll);
    window.removeEventListener("touchmove", onUserScroll);
  };
}, [loading]);


// const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 3000);
  return () => clearTimeout(timer);
}, []);


  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");
  //   let isScrolling = false;

  //   const onWheel = (e) => {
  //     if (isScrolling) return;
  //     isScrolling = true;

  //     e.preventDefault();

  //     const current = Math.round(window.scrollY / window.innerHeight);
  //     const next = e.deltaY > 0 ? current + 1 : current - 1;

  //     if (sections[next]) {
  //       sections[next].scrollIntoView({ behavior: "smooth" });
  //     }

  //     setTimeout(() => (isScrolling = false), 900);
  //   };

  //   window.addEventListener("wheel", onWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", onWheel);
  // }, []);

  return (
    <>
     <AnimatePresence>
      {loading && <WelcomeLoader />}
    </AnimatePresence>

     {!loading && (
      
     
    <div
      ref={containerRef}
      className="bg-neutral-950 text-white font-sans overflow-hidden"
    >
      <AnimatePresence>
  {showNav && <GlassNavbar />}
</AnimatePresence>

      {/* Section 1 – Portfolio Intro */}
      <section  ref={firstSectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Blobs */}
        <div className="absolute -top-40 -left-40 z-0 h-[600px] w-[600px] rounded-full bg-purple-600/50 blur-[120px]" />
        <div className="absolute top-20 right-0 z-0 h-[500px] w-[500px] rounded-full bg-indigo-600/50 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 z-0 h-[600px] w-[600px] rounded-full bg-violet-700/40 blur-[140px]" />

        {/* Center Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-[14vw] font-extrabold tracking-tight text-white"
        >
          PORTFOLIO
        </motion.h1>

        {/* Bottom Left – Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-6 left-6 z-10 text-white text-sm md:text-base tracking-wide"
        >
          Chandra Shekhara Prasad
        </motion.div>

        {/* Bottom Right – Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-6 right-6 z-10 text-white text-sm md:text-base tracking-widest uppercase"
        >
          Skills Never Die
        </motion.div>
      </section>

      {/* Section 2 – About */}
      <section   ref={secondSectionRef} className="relative min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-900 to-black" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            <p className="text-gray-300 mb-3 text-lg px-8">Hello, I am</p>
            <h1 className="text-6xl font-extrabold mb-10 px-8 leading-tight">
              Chandra <br /> Shekhara Prasad
            </h1>

            <img src={img} alt="Profile" className="w-[320px]" />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {/* About */}
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                Curious and passionate, I've always been interested in how
                visuals can shape the way people feel and think. Over time, that
                curiosity led me to graphic design — a field where creativity
                meets problem-solving. I love exploring how colors, typography,
                and layout can communicate ideas and emotions clearly and
                beautifully. Through this portfolio, I aim to show my approach
                as a designer who values clarity, balance, and meaning in every
                project.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-3">Education</h2>
              <p className="text-gray-300">
                <span className="font-semibold">2023 – Present</span>
                <br />
                School name
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Skills</h2>

              <div className="flex gap-4 mb-6">
                {["Ps", "Ai", "Ae", "Pr"].map((skill) => (
                  <div
                    key={skill}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 font-bold"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  ✂️
                </div>
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  🎨
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• 2020 – 2023 — Company · Job Title</li>
                <li>• 2024 — Company · Job Title</li>
                <li>• 2025 – Present — Company · Job Title</li>
                <li>• 2025 – Present — Company · Job Title</li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-6">
              {["in", "mail", "wa"].map((icon) => (
                <div
                  key={icon}
                  className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  ↗
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Skills with Interactive Grid */}
      <SkillsSection />


       <section className="h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[14vw] font-extrabold tracking-tight"
        >
          PROJECTS
        </motion.h1>
      </section>

      {/* ===================== SECTION 2 : SHOWCASE ===================== */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-950 via-black to-black text-white flex">
        
        {/* ---------- LEFT SIDE ---------- */}
        <div className="w-[55%] px-5 flex justify-center items-center gap-10">

          {/* Glass Vertical Navbar */}
          <div className=" h-[50vh] w-[15%] z-20
            backdrop-blur-xl bg-white/10 border border-white/20
            rounded-full py-6 px-4 space-y-4 flex flex-col justify-center items-center gap-5 ">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`block text-[10px] tracking-widest transition cursor-pointer
                  ${activeTab === tab ? "text-white , scale-150" : "text-white/50"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Big Dynamic Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className=" flex-1 text-[7vw] font-extrabold  "
            >
              {activeTab}
            
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="w-[45%] px-20 py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-3 gap-10 "
            >
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative rounded-3xl overflow-hidden h-40 w-40
                    ${i % 2 === 0 ? "" : ""}
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70
                    opacity-0 hover:opacity-100 transition
                    flex flex-col justify-end p-6 ">
                    <p className="text-sm mb-2">{item.desc}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[14vw] font-extrabold tracking-tight"
        >
          EDUCATION
        </motion.h1>
      </section>
       <section className="relative min-h-screen bg-black text-white px-24 py-32">
      {/* <h1 className="text-7xl font-extrabold mb-24 tracking-widest">
        EDUCATION
      </h1> */}

      <div className="relative">
        {/* Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-[22px] top-0 w-[2px] h-full bg-white/30 origin-top"
        />

        {education.map((item, index) => (
          <EducationItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>

      {/* Section 4 – About */}
      <section className="h-screen flex items-center justify-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-center text-xl text-gray-300 leading-relaxed"
        >
          I build cinematic, scroll-snapped, animation‑driven web experiences
          using React, Tailwind CSS, and Framer Motion — inspired by modern
          reels and award‑winning websites.
        </motion.p>
      </section>

      {/* Section 5 – Projects */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[80vw] h-[60vh] rounded-3xl bg-gradient-to-br from-purple-600/30 to-pink-600/10 border border-white/10 flex items-end p-10"
        >
          <h2 className="text-4xl font-bold">Selected Work</h2>
        </motion.div>
      </section>

      {/* Section 6 – Contact */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-6xl font-bold mb-6">Let's work together</h2>
          <button className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Contact Me
          </button>
        </motion.div>
      </section>
    </div>
    )}
    </>
    
  );
}

// Enhanced Skills Section with Interactive Grid
function SkillsSection() {
  const skillsRef = useRef(null);
  const gridRef = useRef(null);
  const highlightRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!skillsRef.current) return;
    const rect = skillsRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update grid mask directly without state for smooth performance
    if (gridRef.current) {
      gridRef.current.style.maskImage = `radial-gradient(circle 300px at ${x}px ${y}px, rgba(0,0,0,0.8), transparent)`;
      gridRef.current.style.WebkitMaskImage = `radial-gradient(circle 300px at ${x}px ${y}px, rgba(0,0,0,0.8), transparent)`;
    }

    // Update highlight circle directly
    if (highlightRef.current) {
      highlightRef.current.style.left = `${x - 200}px`;
      highlightRef.current.style.top = `${y - 200}px`;
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const skills = [
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Tailwind",
    "Framer",
    "Next.js",
    "Git",
    "Java",
    "Express",
    "RTK Query",
    "Postman",
  ];

  return (
    <section
      ref={skillsRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full bg-neutral-950 text-white overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-50">
        <div
          ref={gridRef}
          className="absolute inset-0 bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            maskImage: isHovering
              ? "radial-gradient(circle 300px at 0px 0px, rgba(0,0,0,0.8), transparent)"
              : "radial-gradient(circle 0px at center, transparent, transparent)",
            WebkitMaskImage: isHovering
              ? "radial-gradient(circle 300px at 0px 0px, rgba(0,0,0,0.8), transparent)"
              : "radial-gradient(circle 0px at center, transparent, transparent)",
          }}
        />

        {/* Gradient Highlight Circle */}
        {isHovering && (
          <div
            ref={highlightRef}
            className="absolute pointer-events-none"
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 70%, transparent 100%)",
              filter: "blur(40px)",
              left: "0px",
              top: "0px",
            }}
          />
        )}
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-7xl font-extrabold tracking-widest text-center mt-24 mb-16">
        SKILLS
      </h1>

      {/* Skills Container */}
      <div className="relative w-full h-[70vh] z-20">
        {skills.map((skill) => (
          <FloatingSkill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}

// Floating Skill Component
function FloatingSkill({ skill }) {
  const [active, setActive] = useState(false);

  // random values per skill
  const startY = Math.random() * 550 - 125;
  const duration = 4 + Math.random() * 3; // faster speed

  return (
    <motion.div
      initial={{ x: -150, y: startY }}
      animate={{
        x: "110vw",
        scale: active ? 1.3 : 1,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      onClick={() => setActive(!active)}
      className={`
        absolute px-6 py-3 rounded-full cursor-pointer select-none
        border backdrop-blur-md
        ${
          active
            ? "bg-white text-black border-white shadow-[0_0_35px_rgba(255,255,255,0.8)] z-10"
            : "bg-white/10 text-white border-white/20"
        }
      `}
    >
      {skill}
    </motion.div>
  );
}


function GlassNavbar() {
  const items = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        px-8 py-3 rounded-full
        backdrop-blur-xl bg-white/10
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.3)]
      "
    >
      <ul className="flex gap-8 text-sm font-medium tracking-wide">
        {items.map((item) => (
          <li
            key={item}
            className="cursor-pointer text-white/80 hover:text-white transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
function EducationItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="relative flex items-start gap-16 mb-28">
      
      {/* LEFT SIDE – NUMBER + PING */}
      <div className="relative">
        {/* Ping Effect */}
        <motion.span
          animate={{
            scale: isInView ? [1, 1.8, 1] : 1,
            opacity: isInView ? [0.6, 0, 0.6] : 0,
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full bg-purple-500 blur-md"
        />

        {/* Number Circle */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0.5,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="
            relative z-10
            w-12 h-12 rounded-full
            flex items-center justify-center
            bg-white text-black font-bold
          "
        >
          {item.id}
        </motion.div>
      </div>

      {/* HORIZONTAL LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="origin-left w-24 h-[2px] bg-white/40 mt-6"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="max-w-xl"
      >
        <h2 className="text-3xl font-bold mb-2">
          {item.title}
        </h2>
        {/* <p className="text-lg text-gray-300">
          {item.college}
        </p> */}
        <p className="text-sm text-gray-400 mt-1">
          {item.year}
        </p>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="origin-left w-24 h-[2px] bg-white/40 mt-6"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="max-w-xl"
      >
        
        <h2 className="text-3xl font-bold mb-2">
          {item.college}
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          {item.location}
        </p>
      </motion.div>
    </div>
  );
}