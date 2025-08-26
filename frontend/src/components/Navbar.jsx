import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#1B3C53] shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-[#D2C1B6]">
        <h1 className="text-xl font-bold">Asawer Ayesha</h1>
        <ul className="flex space-x-6">
          <li><a href="#intro" className="hover:text-[#456882]">Intro</a></li>
          <li><a href="#projects" className="hover:text-[#456882]">Projects</a></li>
          <li><a href="#skills" className="hover:text-[#456882]">Skills</a></li>
          <li><a href="#contact" className="hover:text-[#456882]">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
