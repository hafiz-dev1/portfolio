// src/app/components/Certifications.tsx
"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { certifications } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

const MONTH_MAP: { [key: string]: number } = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

const parseDate = (dateStr: string): Date => {
  const cleanedDateStr = dateStr.replace("Issued: ", "").replace("Diperoleh: ", "");
  const parts = cleanedDateStr.split(" ");
  const month = MONTH_MAP[parts[0]];
  const year = parseInt(parts[1], 10);
  return new Date(year, month);
};

function Certifications() {
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

  const handlePrevious = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentCertifications.map((cert, index) => (
            <motion.a
              key={`${cert.name}-${index}`}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left w-full gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.08, y: -6 }}
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
                  onClick={handlePrevious}
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
                  onClick={handleNext}
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

export default memo(Certifications);