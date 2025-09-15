// src/app/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { skills, softSkills } from "@/app/data"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-16 md:py-20">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>

        <Tabs defaultValue="teknologi" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="teknologi">Tech Stacks</TabsTrigger>
            <TabsTrigger value="soft-skills">Soft Skills</TabsTrigger>
          </TabsList>

          {/* KONTEN TAB TEKNOLOGI */}
          <TabsContent value="teknologi">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                // Gunakan warna dari data atau fallback
                const colorClass = skill.color
                  ? skill.color
                  : [
                      "text-blue-500",
                      "text-green-500",
                      "text-yellow-500",
                      "text-red-500",
                      "text-purple-500",
                      "text-pink-500",
                      "text-teal-500",
                    ][index % 7];

                return (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon
                      className={`text-4xl md:text-5xl ${colorClass}`}
                      style={{ color: skill.color }} 
                    />
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>

          {/* KONTEN TAB SOFT SKILLS */}
          <TabsContent value="soft-skills">
            <div className="text-left mt-8 space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
                    {skill.skill}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
