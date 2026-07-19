"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { projects, projectImages } from "@/constants";
import { staggerContainer, staggerItem } from "@/animations";
import { MapPin, Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = ["All", "Residential", "Commercial", "Interior", "Infrastructure"];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const swiperRef = useRef<SwiperType | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects">
      <Heading
        title="Featured Projects"
        subtitle="A showcase of our finest work spanning residential, commercial, and infrastructure projects across India."
        highlight="Featured"
      />

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-[10px] text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-primary text-white shadow-lg"
                : "bg-muted text-gray-500 hover:bg-primary/5 hover:text-primary"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="relative group/projects">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".projects-prev",
            nextEl: ".projects-next",
          }}
          pagination={{ clickable: true, el: ".projects-pagination" }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          className="pb-14"
        >
          {filtered.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative rounded-[18px] overflow-hidden bg-white premium-shadow border border-border/50 cursor-pointer h-full"
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

                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-xl">
                      <ArrowUpRight size={22} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 text-primary text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-[Poppins] font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-full bg-muted text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="projects-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/projects:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="projects-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/projects:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary text-sm font-semibold uppercase tracking-[0.15em] rounded-[10px] hover:bg-primary hover:text-white transition-all duration-300"
        >
          View All Projects
          <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </Section>
  );
}
