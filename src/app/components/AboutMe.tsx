// src/app/components/AboutMe.tsx
"use client";

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hi, I'm Hafiz—a full-stack developer from Indonesia with a passion for building user-centric and impactful web applications. My philosophy is that technology is a tool for empowerment. I focus on creating meaningful solutions that solve real-world problems and simplify complexity for the end-user.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether I'm architecting a backend system or designing an intuitive user interface, my goal is always the same: to transform ideas into functional, elegant, and impactful digital experiences. Driven by a deep sense of curiosity, I am a committed lifelong learner, constantly exploring new challenges and technologies to grow.
          </p>
        </div>
      </motion.div>
    </section>
  );
}