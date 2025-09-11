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
            Hi, I’m Hafiz — a passionate developer from Indonesia who loves building functional and elegant web applications. I believe technology is not just about code, but about creating real solutions that make life simpler and more meaningful.          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Beyond coding, I enjoy a good cup of coffee, exploring nature, and continuously learning new things. With curiosity as my driving force, I strive to grow every day and create impactful digital experiences.          </p>
        </div>
      </motion.div>
    </section>
  );
}