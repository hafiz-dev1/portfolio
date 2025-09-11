// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import ProfileImage from './ProfileImage'; // <-- Impor komponen baru kita

export default function Hero() {
  const imageWidth = 300; // Definisikan lebar gambar di sini
  const imageHeight = 300; // Definisikan tinggi gambar di sini

  return (
    <section id="hero" className="text-center md:text-left py-16 md:py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Kolom Teks (Tidak Berubah) */}
        <motion.div 
          className="md:w-1/2 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hafiz Amrullah</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-8">
            {"We create modern and user-friendly web applications to address real-world challenges."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-black text-white dark:bg-white dark:text-black font-semibold py-2 px-6 rounded-lg 
                        hover:bg-gray-800 w-full sm:w-auto text-center 
                        shadow-md hover:shadow-xl transition"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 font-semibold py-2 px-6 rounded-lg 
                        border border-gray-300 hover:bg-gray-100 w-full sm:w-auto text-center 
                        shadow-md hover:shadow-xl transition"
            >
              My Projects
            </a>
          </div>
        </motion.div>

        {/* KOLOM GAMBAR MENGGUNAKAN ProfileImage */}
        <motion.div 
          className="md:w-1/3" // Container untuk ProfileImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileImage
            src="/images/profile.jpg"
            alt="Foto Profil Hafiz Amrullah"
            width={imageWidth}
            height={imageHeight}
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}