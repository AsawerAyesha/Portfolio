import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
