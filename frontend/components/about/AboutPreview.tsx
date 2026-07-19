"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeInLeft, fadeInRight } from "@/animations";
import { Target, Eye, Gem, ChevronLeft, ChevronRight } from "lucide-react";
import { aboutImage } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const mvvItems = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Delivering exceptional construction solutions with integrity and innovation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be India's most trusted and innovative construction company.",
  },
  {
    icon: Gem,
    title: "Our Values",
    desc: "Quality, transparency, safety, and commitment to excellence.",
  },
];

export default function AboutPreview() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] bg-primary/10">
            <Image
              src={aboutImage}
              alt="Raya Construction team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-[18px] p-6 shadow-xl border border-border"
          >
            <div className="text-3xl font-[Poppins] font-bold text-secondary">500+</div>
            <div className="text-sm text-gray-500 mt-1">Projects Delivered</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-4 -left-4 md:left-6 bg-primary rounded-[18px] p-5 shadow-xl"
          >
            <div className="text-2xl font-[Poppins] font-bold text-white">98%</div>
            <div className="text-xs text-white/70 mt-1">Client Satisfaction</div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-secondary" />
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-semibold">
              About Us
            </span>
          </div>

          <h2 className="font-[Poppins] text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
            Crafting Spaces That{" "}
            <span className="text-gradient">Inspire Generations</span>
          </h2>

          <p className="text-gray-500 leading-relaxed mb-8">
            Since 1999, Raya Construction and Solutions has been at the forefront of India&apos;s
            construction industry. We combine time-tested craftsmanship with modern technology
            to deliver projects that stand as landmarks of excellence. Our commitment to quality,
            innovation, and client satisfaction has earned us the trust of over 500 satisfied clients.
          </p>

          <div className="relative group/mvv mb-10 lg:overflow-visible overflow-hidden">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: ".mvv-prev",
                nextEl: ".mvv-next",
              }}
              pagination={{ clickable: true, el: ".mvv-pagination" }}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop
              className="pb-14"
            >
              {mvvItems.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="p-4 rounded-[18px] bg-muted/50 border border-border/50 hover:border-secondary/30 transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-[10px] bg-primary/5 flex items-center justify-center mb-3">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <h4 className="font-[Poppins] font-semibold text-sm text-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="mvv-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/mvv:opacity-100 cursor-pointer max-sm:hidden"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="mvv-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/mvv:opacity-100 cursor-pointer max-sm:hidden"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <Button href="/about" variant="primary" size="md">
            Read More About Us
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
