// src/app/components/ProjectSection.tsx
"use client";

import { memo } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/data';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function ProjectSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            <Rocket size={16} />
            <span>Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work and case studies
          </p>
        </motion.div>
        
        {/* Horizontal Scroll Container with Enhanced UI */}
        <div className="relative">
          {/* Scroll hint gradient on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex overflow-x-auto gap-8 pb-8 scroll-snap-x-mandatory hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[31%] scroll-snap-start"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll hint */}
        <motion.p
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          ← Scroll horizontally to explore more →
        </motion.p>
      </div>
    </section>
  );
}

export default memo(ProjectSection);