// src/app/components/Contact.tsx
"use client";

import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full blur-3xl opacity-20 -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              <MessageCircle size={16} />
              <span>Let&apos;s Connect</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Always open to new projects, creative ideas, or a quick chat. Let&apos;s connect and build something amazing together! 📨
            </p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Email Icon */}
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                <Mail size={32} className="text-white" />
              </div>

              {/* Email Address */}
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Email me at</p>
                <a
                  href="mailto:hafiz.amrullah@yahoo.com"
                  className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  hafiz.amrullah@yahoo.com
                </a>
              </div>

              {/* CTA Button */}
              <motion.a
                href="mailto:hafiz.amrullah@yahoo.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>Send a Message</span>
              </motion.a>

              {/* Additional Info */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                I typically respond within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Or find me on social media
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/hafiz-dev1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/hafizamrullah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/hafizamrullah_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                aria-label="Instagram Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
