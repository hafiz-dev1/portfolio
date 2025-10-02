// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import ProfileImage from './ProfileImage';
import { ArrowRight, Sparkles } from "lucide-react";

const IMAGE_SIZE = 300;

function Hero() {

  return (
    <section id="hero" className="relative text-center md:text-left py-20 md:py-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Text Column - Enhanced */}
        <motion.div 
          className="md:w-1/2 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Full-Stack Developer</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Hafiz Amrullah
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
            Creating modern and user-friendly web applications to address real-world challenges with elegant solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-black font-semibold py-3 px-8 rounded-xl 
                        hover:shadow-2xl w-full sm:w-auto text-center 
                        transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Contact Me</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-xl 
                        border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white
                        hover:shadow-xl w-full sm:w-auto text-center 
                        transition-all duration-300"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Image Column - Enhanced */}
        <motion.div 
          className="md:w-1/3 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
          
          <div className="relative">
            <ProfileImage
              src="/images/profile.jpg"
              alt="Hafiz Amrullah - Full-Stack Developer"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Hero);