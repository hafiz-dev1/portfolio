// src/app/components/ProjectSection.tsx
"use client";

import ProjectCard from './ProjectCard';
import { projects } from '@/app/data';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Projects
        </h2>
        
        {/* Kontainer Flexbox dengan Scroll Snap */}
        <motion.div
          className="flex overflow-x-auto gap-8 pb-8 scroll-snap-x-mandatory"
          // Inisialisasi animasi container tidak diperlukan lagi karena item akan muncul saat scroll
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // Atur lebar kartu dan scroll snap alignment
              className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[31%] scroll-snap-start"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}