// src/app/components/Certifications.tsx
"use client";

import { useState, useMemo } from "react";
import { certifications } from "@/app/data"; // Pastikan path ini sesuai
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Pastikan path ini sesuai

// PERBAIKAN 1: Optimalkan jumlah item per halaman agar sesuai dengan grid
const ITEMS_PER_PAGE = 6; // Mengubah dari 8 menjadi 6 untuk grid yang lebih rapi (2x3 atau 3x2)

// PERBAIKAN 2: Sesuaikan parsing tanggal untuk format bahasa Inggris
const parseDate = (dateStr: string): Date => {
  const monthMap: { [key: string]: number } = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, 
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  // Asumsikan format "Issued: May 2025" atau "May 2025"
  const cleanedDateStr = dateStr.replace("Issued: ", "").replace("Diperoleh: ", "");
  const parts = cleanedDateStr.split(" ");
  const month = monthMap[parts[0]];
  const year = parseInt(parts[1], 10);
  return new Date(year, month);
};

export default function Certifications() {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedCertifications = useMemo(() => {
    return [...certifications].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }, []);

  const totalPages = Math.ceil(sortedCertifications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCertifications = sortedCertifications.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section
      id="certifications"
      className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Certifications
        </h2>

        {/* Grid Responsif */}
        {/* PERBAIKAN 3: Hapus min-h untuk tinggi yang lebih natural */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentCertifications.map((cert, index) => (
            <motion.a
              key={`${cert.name}-${index}`}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              // PERBAIKAN 4: Tata letak kartu yang lebih adaptif di layar kecil
              className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left w-full gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-500 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 relative mb-3 sm:mb-0">
                <Image
                  src={cert.logoUrl}
                  alt={`${cert.issuer} logo`}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="font-medium text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {cert.date}
                </p>
              </div>
              <div className="flex-shrink-0 self-center sm:self-start">
                <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <Pagination>
            <PaginationContent className="flex items-center gap-4">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePrevious();
                  }}
                  className={`${
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }`}
                />
              </PaginationItem>
              <PaginationItem>
                <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Page {currentPage} of {totalPages}
                </span>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
                  className={`${
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}