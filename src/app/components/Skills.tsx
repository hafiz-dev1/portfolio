"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Teknologi yang Saya Kuasai
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg"
                variants={itemVariants}
              >
                <Icon
                  className="text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 4px 8px ${skill.color}66)`, // shadow sesuai warna icon
                  }}
                />
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
