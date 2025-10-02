// src/app/components/Footer.tsx
"use client";

import { Heart } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="relative py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
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
        </div>
      </div>
    </footer>
  );
}