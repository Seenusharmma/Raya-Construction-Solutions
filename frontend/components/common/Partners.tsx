"use client";

import { useRef } from "react";
import Section from "@/components/ui/Section";
import { clients } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export default function Partners() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section className="py-16 md:py-20 border-y border-border/50">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
          Trusted by Industry Leaders
        </span>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={48}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        speed={3000}
        loop
        freeMode
        className="partners-swiper"
      >
        {[...clients, ...clients].map((client, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center py-4">
              <span className="text-lg md:text-xl font-[Poppins] font-bold text-gray-300 hover:text-primary transition-colors duration-300 cursor-default select-none whitespace-nowrap">
                {client}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
