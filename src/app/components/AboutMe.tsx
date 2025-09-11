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
          Tentang Saya
        </h2>
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Halo! Saya Hafiz, seorang developer yang berbasis di Indonesia dengan hasrat untuk menciptakan aplikasi web yang fungsional dan indah. Perjalanan saya di dunia coding dimulai saat saya menyadari bagaimana teknologi dapat digunakan untuk menyelesaikan masalah nyata secara efisien dan kreatif.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Di luar coding, saya menikmati secangkir kopi di pagi hari, menjelajahi alam, dan terus belajar hal-hal baru. Saya percaya bahwa rasa ingin tahu yang tak pernah padam adalah kunci untuk menjadi seorang developer yang hebat. Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!
          </p>
        </div>
      </motion.div>
    </section>
  );
}