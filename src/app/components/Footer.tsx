// src/app/components/Footer.tsx
"use client";

import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a 
              href="https://github.com/hafiz-dev1" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/hafizamrullah" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2 justify-center">
              <span>&copy; {new Date().getFullYear()} Hafiz Amrullah.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
              <span className="hidden sm:inline">and lots of coffee</span>
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              All rights reserved.
            </p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}