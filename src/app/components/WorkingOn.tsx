// src/app/components/WorkingOn.tsx
"use client";

import { workingOn } from '@/app/data';
import { motion } from 'framer-motion';

export default function WorkingOn() {
  return (
    <section id="working-on" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Working On..
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workingOn.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}