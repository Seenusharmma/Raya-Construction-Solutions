"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { services, serviceImages } from "@/constants";
import { staggerContainer, staggerItem } from "@/animations";
import {
  Building2,
  Compass,
  Palette,
  Landmark,
  Briefcase,
  Wrench,
  ClipboardList,
  HardHat,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Compass,
  Palette,
  Landmark,
  Briefcase,
  Wrench,
  ClipboardList,
  HardHat,
};

export default function Services() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section id="services" className="bg-muted/30">
      <Heading
        title="Our Premium Services"
        subtitle="Comprehensive construction solutions delivered with precision, innovation, and an unwavering commitment to quality excellence."
        highlight="Premium"
      />

      <div className="relative group/services">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: ".services-prev",
            nextEl: ".services-next",
          }}
          pagination={{ clickable: true, el: ".services-pagination" }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          className="pb-14"
        >
          {services.slice(0, 8).map((service) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <SwiperSlide key={service.id}>
                <motion.div
                  variants={staggerItem}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-[18px] overflow-hidden premium-shadow border border-border/50 hover:border-secondary/30 transition-all duration-500 h-full"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={serviceImages[service.id] || serviceImages.construction}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                    <div className="absolute bottom-4 left-6 z-10">
                      <div className="w-12 h-12 rounded-[12px] bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                        <Icon
                          size={22}
                          className="text-primary group-hover:text-white transition-colors duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-[Poppins] font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-muted text-gray-500 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="services-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/services:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="services-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/services:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}
