// src/app/components/AboutMe.tsx
"use client";

import { motion } from 'framer-motion';
import { memo } from 'react';
import { Sparkles, Heart, Lightbulb } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "User-Centric Focus",
    description: "Technology as a tool for empowerment"
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "Building impactful solutions"
  },
  {
    icon: Lightbulb,
    title: "Lifelong Learner",
    description: "Constantly exploring new challenges"
  }
];

function AboutMe() {

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20 -z-10" />
      
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <motion.p
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming ideas into elegant digital experiences
          </motion.p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="space-y-6 text-center md:text-left">
              <motion.p 
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hi, I&apos;m <span className="font-bold text-blue-600 dark:text-blue-400">Hafiz</span>—a full-stack developer from Indonesia with a passion for building user-centric and impactful web applications. My philosophy is that technology is a tool for empowerment. I focus on creating meaningful solutions that solve real-world problems and simplify complexity for the end-user.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Whether I&apos;m architecting a backend system or designing an intuitive user interface, my goal is always the same: to transform ideas into functional, elegant, and impactful digital experiences. Driven by a deep sense of curiosity, I am a committed lifelong learner, constantly exploring new challenges and technologies to grow.
              </motion.p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-full mb-3 shadow-md">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default memo(AboutMe);