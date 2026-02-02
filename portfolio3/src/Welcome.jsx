import { motion } from "framer-motion";

export default function WelcomeLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden text-white"
    >
      {/* Ambient Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-purple-600/30 blur-[160px]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/30 blur-[140px]" />

      <div className="relative z-10 flex flex-col items-center">

        {/* WELCOME */}
        <div className="flex text-[18vw] font-extrabold leading-none overflow-hidden">
          {/* WEL */}
          <motion.span
            initial={{ x: "-120%" }}
            animate={{ x: ["-120%", "0%", "-120%"] }}
            transition={{
              duration: 3,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            }}
          >
            WEL
          </motion.span>

          {/* COME */}
          <motion.span
            initial={{ x: "120%" }}
            animate={{ x: ["120%", "0%", "120%"] }}
            transition={{
              duration: 3,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            }}
          >
            COME
          </motion.span>
        </div>

        {/* NAME */}
        {/* <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 0, 80],
          }}
          transition={{
            duration: 2.5,
            delay: 1.2,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
          className="mt-6 text-gray-300 tracking-widest uppercase text-sm"
        >
          Chandra Shekhara Prasad
        </motion.p> */}

        {/* FINAL LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="absolute bottom-24 text-gray-400 tracking-widest uppercase text-lg"
        >
          Welcome to my portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}
