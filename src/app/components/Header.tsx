// src/app/components/Header.tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState, useCallback, memo } from "react";
import { navLinks } from "@/app/data";
import clsx from 'clsx';

interface HeaderProps {
  activeSection: string;
}

function Header({ activeSection }: HeaderProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header 
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
          <a href="#" aria-label="Portfolio Home">PORTFOLIO</a>
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.hash}
              className={clsx(
                'relative font-medium transition-all duration-300 hover:scale-110',
                activeSection === link.hash 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              {link.name}
              {activeSection === link.hash && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <Sun 
                size={20} 
                className={clsx(
                  'absolute inset-0 transition-all duration-500 ease-in-out',
                  theme === "dark" 
                    ? 'rotate-180 scale-0 opacity-0' 
                    : 'rotate-0 scale-100 opacity-100'
                )}
              />
              <Moon 
                size={20} 
                className={clsx(
                  'absolute inset-0 transition-all duration-500 ease-in-out',
                  theme === "dark" 
                    ? 'rotate-0 scale-100 opacity-100' 
                    : '-rotate-180 scale-0 opacity-0'
                )}
              />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.hash}
                onClick={closeMobileMenu}
                className={clsx(
                  'py-2 px-4 rounded-lg font-medium transition-all',
                  activeSection === link.hash 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default memo(Header);