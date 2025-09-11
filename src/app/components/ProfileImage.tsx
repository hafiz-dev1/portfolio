// src/app/components/ProfileImage.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function ProfileImage({ src, alt, width, height, priority }: ProfileImageProps) {
  return (
    <motion.div
      className="relative mx-auto"
      style={{ 
        width: width, 
        height: height 
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* LAPISAN PALING BELAKANG: KOTAK-KOTAK GEOMETRIS */}
      <motion.div 
        className="absolute inset-0 -z-20" // -z-20 agar di bawah glow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }} // Muncul setelah gambar
      >
        {/* Kotak Kiri */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-1/2 w-40 h-20 bg-blue-500/30 dark:bg-sky-700/30 rounded-full blur-xl" // Blur lebih kecil dari glow
          style={{ transform: 'translate(-80%, -50%) rotate(-15deg)' }} // Atur posisi dan rotasi
        ></div>
        {/* Kotak Kanan */}
        <div 
          className="absolute top-1/2 right-1/2 translate-x-full -translate-y-1/2 w-40 h-20 bg-blue-500/30 dark:bg-sky-700/30 rounded-full blur-xl"
          style={{ transform: 'translate(80%, -50%) rotate(15deg)' }} // Atur posisi dan rotasi
        ></div>
      </motion.div>


      {/* LAPISAN TENGAH: Side Glow */}
      <motion.div
        className="absolute inset-0 -z-10" // -z-10 untuk menempatkannya di belakang gambar tapi di atas kotak
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(96, 165, 250, 0) 60%)',
        }}
        initial={{ filter: 'blur(20px)', scale: 1 }}
        animate={{ filter: 'blur(40px)', scale: 1.05 }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut' 
        }}
      />

      {/* LAPISAN PALING DEPAN: Gambar Asli */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full object-cover shadow-lg relative z-10"
        priority={priority}
      />
    </motion.div>
  );
}