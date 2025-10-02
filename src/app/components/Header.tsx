// src/app/components/Header.tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useCallback, memo } from "react";
import { LayoutGroup, motion } from "framer-motion";
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
          ? 'bg-white/60 dark:bg-black/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-transparent'
      )}
    >
    <div className="relative">
  <div className="container mx-auto grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center gap-6 px-4 py-4">
        {/* Logo */}
      <h1 className="flex items-center justify-self-start">
            <Link
              href="#hero"
              aria-label="Portfolio Home"
              className="group flex items-center gap-3"
            >
              <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 text-white font-semibold shadow-[0_12px_30px_-12px_rgba(79,70,229,0.8)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <span className="text-lg tracking-tight">HA</span>
                <span className="absolute inset-0 rounded-2xl border border-white/20" />
              </span>
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                  Portfolio
                </span>
                <span className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300 transition-colors duration-300 group-hover:from-blue-600 group-hover:to-purple-500 dark:group-hover:from-blue-300 dark:group-hover:to-purple-300">
                  Hafiz Amrullah
                </span>
              </span>
            </Link>
          </h1>
          
          {/* Desktop Navigation */}
          <LayoutGroup id="desktop-nav">
            <nav className="hidden md:flex items-center gap-8 justify-center justify-self-center">
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
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="pointer-events-none absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-blue-600 dark:bg-blue-400"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>
          </LayoutGroup>

          {/* Actions */}
          <div className="flex items-center gap-2 justify-self-end justify-end">
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
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-navigation"
          className={clsx(
            "md:hidden absolute left-0 right-0 top-full origin-top border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/90 backdrop-blur-xl overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out shadow-lg",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0 pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          )}
          aria-hidden={!isMobileMenuOpen}
        >
          <LayoutGroup id="mobile-nav">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.hash}
                  onClick={closeMobileMenu}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={clsx(
                    'relative overflow-hidden py-2 px-4 rounded-lg font-medium transition-all duration-300 transform',
                    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1',
                    activeSection === link.hash
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  {activeSection === link.hash && (
                    <motion.span
                      layoutId="mobileNavHighlight"
                      className="pointer-events-none absolute inset-0 rounded-lg bg-blue-100/80 dark:bg-blue-900/30"
                      transition={{ type: "spring", stiffness: 340, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </nav>
          </LayoutGroup>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);