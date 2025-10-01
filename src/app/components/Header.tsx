// src/app/components/Header.tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/app/data";
import clsx from 'clsx'; // Kita akan pakai clsx untuk menggabungkan class dengan mudah

// Props baru untuk Header
interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  // ... (useState untuk mounted, theme, dan isScrolled tetap sama)
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header 
      className={clsx(`sticky top-0 z-50 transition-all duration-300`, {
        'bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800': isScrolled,
        'bg-transparent': !isScrolled,
      })}
    >
      <div className="container mx-auto flex justify-center items-center px-4 py-4 relative">
        <h1 className="text-xl font-bold absolute left-4">
          <a href="#">PORTFOLIO</a>
        </h1>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.hash}
              className={clsx(
                'font-medium transition-colors',
                // Ini bagian yang diubah
                activeSection === link.hash 
                  ? 'text-black dark:text-white' 
                  : 'text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 absolute right-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95 active:rotate-180"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <Sun 
                size={20} 
                className={clsx(
                  'absolute inset-0 transition-all duration-700 ease-in-out',
                  theme === "dark" 
                    ? 'rotate-180 scale-0 opacity-0' 
                    : 'rotate-0 scale-100 opacity-100'
                )}
              />
              <Moon 
                size={20} 
                className={clsx(
                  'absolute inset-0 transition-all duration-700 ease-in-out',
                  theme === "dark" 
                    ? 'rotate-0 scale-100 opacity-100' 
                    : '-rotate-180 scale-0 opacity-0'
                )}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}