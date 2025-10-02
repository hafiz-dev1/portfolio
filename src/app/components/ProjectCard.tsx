// src/app/components/ProjectCard.tsx
"use client";

import { useState, memo, useCallback } from "react";
import { Project } from "@/app/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Target, Wrench, BarChart, Images, Link as LinkIcon, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"caseStudy" | "screenshots">("caseStudy");

  const handleDialogOpenChange = useCallback(() => {
    setActiveTab('caseStudy');
  }, []);

  const setToCaseStudy = useCallback(() => setActiveTab("caseStudy"), []);
  const setToScreenshots = useCallback(() => setActiveTab("screenshots"), []);

  return (
    <Dialog onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        {/* Trigger Card */}
        <div className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {project.description}
          </p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-4">
             <span className="text-sm font-bold text-blue-500 group-hover:underline">View Details →</span>
          </div>
        </div>
      </DialogTrigger>

      {/* Dialog Modal */}
      <DialogContent className="w-[95vw] max-w-5xl bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{project.title}</DialogTitle>
        </DialogHeader>

        {/* Tab Navigation */}
        <div className="flex-shrink-0 flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            onClick={setToCaseStudy}
            className={`px-4 py-2 font-semibold text-sm transition-colors duration-200 ${
              activeTab === "caseStudy"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Case Study
          </button>
          <button
            onClick={setToScreenshots}
            className={`px-4 py-2 font-semibold text-sm transition-colors duration-200 ${
              activeTab === "screenshots"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Screenshots
          </button>
        </div>

        {/* PERBAIKAN 2: Bungkus konten tab agar bisa di-scroll secara vertikal */}
        <div className="flex-1 overflow-y-auto pr-2">
          {/* Case Study Content */}
          {activeTab === "caseStudy" && (
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed animate-fade-in">
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  The Problem
                </h4>
                <p>{project.caseStudy.problem}</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-green-500" />
                  The Solution
                </h4>
                <p>{project.caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-purple-500" />
                  The Impact
                </h4>
                <p>{project.caseStudy.result}</p>
              </div>
            </div>
          )}

          {/* Screenshots Content with Side Scrolling */}
          {activeTab === "screenshots" && (
            <div className="w-full animate-fade-in">
              <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Images className="w-5 h-5 text-indigo-500" />
                Screenshots
              </h4>
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-flow-col auto-cols-[80vw] sm:auto-cols-[minmax(24rem,1fr)] gap-4">
                  {project.screenshots.map((ss, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-md"
                    >
                      <Image
                        src={ss}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={1280}
                        height={720}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Links */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          {project.githubLink && project.githubLink !== '#' && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex-1 text-center"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-200 flex-1 text-center"
            >
              <LinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default memo(ProjectCard);