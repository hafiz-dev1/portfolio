// src/app/components/Experience.tsx
"use client";

import { experiences } from "@/app/data";
import { motion } from "framer-motion";
import { memo } from "react";
import { Briefcase } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through various roles and companies
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line - Enhanced */}
          <div className="absolute left-4 md:left-1/2 top-3 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 transform md:-translate-x-1/2 opacity-30"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex flex-col md:flex-row md:items-start relative ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline Dot - Enhanced */}
              <div className="absolute left-0 md:left-1/2 top-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 border-4 border-white dark:border-gray-900 rounded-full transform md:-translate-x-1/2 shadow-lg z-10 flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>

              {/* Content Card - Enhanced */}
              <motion.div
                className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-[45%] border border-gray-100 dark:border-gray-700 ${
                  index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                  {exp.duration}
                </p>
                
                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);