"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { projects, projectImages } from "@/constants";
import { staggerContainer, staggerItem } from "@/animations";
import { MapPin, Calendar, ArrowUpRight, Maximize2 } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Interior", "Infrastructure"];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-[10px] text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-primary text-white shadow-lg"
                : "bg-muted text-gray-500 hover:bg-primary/5 hover:text-primary"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={staggerItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-[28px] overflow-hidden bg-white premium-shadow border border-border/50 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projectImages[project.id] || projectImages["1"]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent z-10" />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-dark/30 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-xl mb-3">
                    <Maximize2 size={22} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold">View Project</span>
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 text-primary text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-[Poppins] font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {project.year}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-muted text-gray-500 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
