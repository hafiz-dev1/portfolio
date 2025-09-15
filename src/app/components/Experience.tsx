// src/app/components/Experience.tsx
"use client";

import { experiences } from "@/app/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Experience
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Garis Timeline Vertikal */}
          <div className="absolute left-4 md:left-1/2 top-3 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

          {/* Mapping Data Pengalaman */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col md:flex-row md:items-start relative ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Titik di Timeline */}
              <div className="absolute left-0 md:left-1/2 top-3 w-5 h-5 bg-white dark:bg-gray-900 border-2 border-blue-500 rounded-full transform md:-translate-x-1/2"></div>

              {/* Konten */}
              <div
                className={`bg-gray-50 dark:bg-gray-800 p-5 rounded-xl shadow-md w-full md:w-[45%] ${
                  index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                }`}
              >
                <p className="font-bold text-lg text-gray-800 dark:text-gray-100">
                  {exp.role}
                </p>
                <p className="font-semibold text-gray-600 dark:text-gray-300">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {exp.duration}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
