import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-[#1B3C53] to-[#456882] text-white overflow-hidden"
    >
      {/* Floating AA logo */}
      <motion.div
        className="absolute top-10 right-10 text-[6rem] font-extrabold text-white/20 select-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        AA
      </motion.div>

      {/* Hero content */}
      <div className="z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hello, I’m <span className="text-[#D2C1B6]">Asawer Ayesha</span>
        </h1>

        {/* Typing animation for role */}
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "Quantum Computing Learner",
            2000,
            "Tech Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-medium"
        />
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 text-lg text-[#456882]max-w-2xl"
      >
        I am a Computer Science undergraduate passionate about full-stack development, 
  artificial intelligence, and quantum computing. Through academic learning and 
  hands-on projects, I’ve gained experience in building dynamic web applications, 
  exploring AI-driven solutions, and studying the potential of quantum algorithms.
  My goal is to keep learning, innovating, and building solutions 
  that make a real impact.
      </motion.p>
        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#D2C1B6] text-[#1B3C53] font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
