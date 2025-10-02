// src/app/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { skills, softSkills } from "@/app/data"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Brain } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const COLOR_CLASSES = ["text-blue-500", "text-green-500", "text-yellow-500", "text-red-500", "text-purple-500", "text-pink-500", "text-teal-500"];

function Skills() {

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>

        <Tabs defaultValue="teknologi" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            <TabsTrigger 
              value="teknologi" 
              className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-lg transition-all cursor-pointer"
            >
              <Code2 size={18} />
              <span>Tech Stack</span>
            </TabsTrigger>
            <TabsTrigger 
              value="soft-skills"
              className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-lg transition-all cursor-pointer"
            >
              <Brain size={18} />
              <span>Soft Skills</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="teknologi">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const colorClass = skill.color || COLOR_CLASSES[index % COLOR_CLASSES.length];

                return (
                  <motion.div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      <Icon 
                        className={`relative text-5xl md:text-6xl transition-transform duration-300 ${colorClass}`}
                        style={{ color: skill.color }} 
                      />
                    </div>
                    <span className="font-semibold text-sm text-gray-800 dark:text-gray-200 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>

          <TabsContent value="soft-skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.skill}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}

export default memo(Skills);