"use client";

import { useRef } from "react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { Award, Shield, Trophy, Star, CheckCircle, Medal, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const awards = [
  { icon: Trophy, title: "Best Construction Company 2024", org: "India Construction Awards" },
  { icon: Award, title: "Excellence in Infrastructure", org: "National Infrastructure Council" },
  { icon: Shield, title: "ISO 9001:2015 Certified", org: "International Organization for Standardization" },
  { icon: Star, title: "Top 50 Builders in India", org: "Construction World Magazine" },
  { icon: Medal, title: "Safety Excellence Award", org: "Ministry of Labor & Employment" },
  { icon: CheckCircle, title: "Green Building Certification", org: "Indian Green Building Council" },
];

const certifications = [
  "ISO 9001:2015 - Quality Management",
  "ISO 14001:2015 - Environmental Management",
  "ISO 45001:2018 - Occupational Health & Safety",
  "National Safety Council Certified",
  "IGBC Gold Certified Projects",
  "Ministry of Corporate Affairs Registered",
];

export default function AboutAwards() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <Section>
        <Heading
          title="Awards & Certifications"
          subtitle="Recognized for our commitment to quality, safety, and innovation in the construction industry."
          highlight="Awards"
        />

        <div className="relative group/awards mb-16">
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
              prevEl: ".awards-prev",
              nextEl: ".awards-next",
            }}
            pagination={{ clickable: true, el: ".awards-pagination" }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            className="pb-14"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.title}>
                <div className="p-6 rounded-[18px] bg-white premium-shadow border border-border/50 hover:border-secondary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-[12px] bg-secondary/10 flex items-center justify-center mb-4">
                    <award.icon size={22} className="text-secondary" />
                  </div>
                  <h3 className="font-[Poppins] font-bold text-dark text-base mb-1">{award.title}</h3>
                  <p className="text-gray-500 text-sm">{award.org}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="awards-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/awards:opacity-100 cursor-pointer max-lg:hidden"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="awards-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/awards:opacity-100 cursor-pointer max-lg:hidden"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="bg-muted/50 rounded-[28px] p-8 md:p-12 border border-border/50">
          <h3 className="font-[Poppins] font-bold text-xl text-dark mb-6 text-center">
            Our Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 p-3 rounded-[10px] bg-white/80 border border-border/30">
                <CheckCircle size={16} className="text-success flex-shrink-0" />
                <span className="text-sm text-dark">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
