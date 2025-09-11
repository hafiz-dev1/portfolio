// src/app/components/Footer.tsx
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t dark:border-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4">
        <p className="text-gray-500 text-sm">
          &copy; 2025 Hafiz Amrullah. All rights reserved.
        </p>
        <div className="flex gap-4">
          {/* Ganti "#" dengan URL profil Anda */}
          <a 
            href="https://github.com/username-anda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-black dark:hover:text-white"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/username-anda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-black dark:hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}