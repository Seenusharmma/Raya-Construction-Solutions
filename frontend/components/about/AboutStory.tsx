"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { fadeInLeft, fadeInRight } from "@/animations";
import { Target, Eye, Gem, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const mvvItems = [
  { icon: Target, title: "Mission", desc: "Delivering exceptional construction with integrity and innovation." },
  { icon: Eye, title: "Vision", desc: "To be India's most trusted and innovative construction company." },
  { icon: Gem, title: "Values", desc: "Quality, transparency, safety, and excellence in everything." },
];

export default function AboutStory() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-secondary" />
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-semibold">
              Our Story
            </span>
          </div>
          <h2 className="font-[Poppins] text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
            A Legacy of <span className="text-gradient">Building Trust</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Founded in 1999 by visionary engineers, Raya Construction and Solutions began
            as a small firm with a big dream — to transform India&apos;s construction landscape
            through quality, innovation, and unwavering integrity.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Today, with over 25 years of experience, 500+ completed projects, and a team of
            100+ experts, we have grown into one of India&apos;s most respected construction
            companies. Our portfolio spans luxury residences, commercial complexes, industrial
            facilities, and large-scale infrastructure projects across the nation.
          </p>

          <div className="relative group/mvv overflow-hidden">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: ".story-prev",
                nextEl: ".story-next",
              }}
              pagination={{ clickable: true, el: ".story-pagination" }}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop
              className="pb-14"
            >
              {mvvItems.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="p-5 rounded-[18px] bg-muted/50 border border-border/50 hover:border-secondary/30 transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-[10px] bg-primary/5 flex items-center justify-center mb-3">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <h4 className="font-[Poppins] font-semibold text-sm text-dark mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="story-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/mvv:opacity-100 cursor-pointer max-sm:hidden"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="story-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/mvv:opacity-100 cursor-pointer max-sm:hidden"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="rounded-[28px] overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/5 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-[Poppins] font-bold text-primary/10">25+</div>
                <div className="text-sm uppercase tracking-[0.3em] text-primary/30 mt-2">Years of Excellence</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-[18px] p-6 shadow-xl border border-border">
            <div className="text-3xl font-[Poppins] font-bold text-secondary">500+</div>
            <div className="text-sm text-gray-500 mt-1">Projects Delivered</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
