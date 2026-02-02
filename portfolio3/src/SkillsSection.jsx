import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function FloatingSkill({ skill, onRemove }) {
  const [isClicked, setIsClicked] = useState(false);
  const startYRef = useRef(null);
  const flowDurationRef = useRef(null);
  const flowDelayRef = useRef(null);

  // Initialize refs only once
  useEffect(() => {
    if (!startYRef.current) {
      startYRef.current = Math.random() * (window.innerHeight - 60);
      flowDurationRef.current = 8 + Math.random() * 8;
      flowDelayRef.current = Math.random() * 2;
    }
  }, []);

  const startY = startYRef.current || 0;
  const flowDuration = flowDurationRef.current || 8;
  const flowDelay = flowDelayRef.current || 0;

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(true);
    setTimeout(() => {
      onRemove(skill);
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isClicked && (
        <motion.div
          key={`${skill}-flowing`}
          initial={{
            x: -200,
            y: startY,
            opacity: 0,
          }}
          animate={{
            x: typeof window !== "undefined" ? window.innerWidth + 200 : 1000,
            y: startY,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: flowDuration,
            delay: flowDelay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          onClick={handleClick}
          className="fixed pointer-events-auto cursor-pointer top-0 left-0"
          style={{
            zIndex: 20,
          }}
        >
          <motion.button
            className="px-6 py-3 rounded-full select-none border backdrop-blur-md whitespace-nowrap font-medium bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.button>
        </motion.div>
      )}
      {isClicked && (
        <motion.div
          key={`${skill}-exit`}
          initial={{
            x: typeof window !== "undefined" ? window.innerWidth / 2 : 500,
            y: startY,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="fixed pointer-events-none top-0 left-0"
          style={{
            zIndex: 15,
          }}
        >
          <div className="px-6 py-3 rounded-full select-none border backdrop-blur-md whitespace-nowrap font-medium bg-white/10 text-white border-white/20">
            {skill}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SkillsSection() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [skills, setSkills] = useState([
    "React",
    "Redux",
    "Node.js",
    "MongoDB",
    "Tailwind",
    "Framer Motion",
    "Next.js",
    "Git",
    "Java",
    "Express",
    "RTK Query",
    "Postman",
    "JavaScript",
    "TypeScript",
    "CSS3",
    "HTML5",
    "Docker",
    "REST APIs",
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRemoveSkill = (skillName) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skillName));
  };

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Animated background blobs */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl pointer-events-none"
      />

      {/* Title */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center pointer-events-none z-5 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          SKILLS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/60"
        >
          {skills.length > 0 ? "Click any skill to remove" : "All skills cleared!"}
        </motion.p>
      </div>

      {/* Floating Skills Container */}
      <AnimatePresence>
        {skills.map((skill) => (
          <FloatingSkill
            key={skill}
            skill={skill}
            onRemove={handleRemoveSkill}
          />
        ))}
      </AnimatePresence>

      {/* Bottom instruction */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/40 text-sm"
        >
          {skills.length} skills flowing · Click to remove
        </motion.p>
      </div>
    </section>
  );
}