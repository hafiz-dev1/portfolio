// src/app/components/Contact.tsx
"use client"; // Kita akan tambahkan animasi, jadi jadikan client component

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    // Berikan id="contact" agar bisa ditarget oleh anchor link
    <section id="contact" className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8"></p>
          <p>{`Always open to new projects, creative ideas, or a quick chat. Let’s connect via email. 📨`}</p>
        <a
          href="mailto:hafiz.amrullah@yahoo.com"
          className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <Mail size={20} />
          <span>hafiz.amrullah@yahoo.com</span>
        </a>
      </motion.div>
    </section>
  );
}