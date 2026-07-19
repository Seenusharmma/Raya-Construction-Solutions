"use client";

import { useRef } from "react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { Building, Hotel, GraduationCap, HeartPulse, Factory, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const industries = [
  { icon: Building, name: "Corporate Offices", desc: "Smart, sustainable workspaces" },
  { icon: Hotel, name: "Hotels & Restaurants", desc: "Luxury hospitality spaces" },
  { icon: GraduationCap, name: "Educational Institutions", desc: "Modern learning environments" },
  { icon: HeartPulse, name: "Healthcare", desc: "Advanced medical facilities" },
  { icon: Factory, name: "Industrial", desc: "High-performance industrial plants" },
  { icon: ShoppingCart, name: "Retail & Commercial", desc: "Customer-centric retail spaces" },
];

export default function ServicesIndustries() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section className="bg-muted/30">
      <Heading
        title="Industries We Serve"
        subtitle="Specialized construction solutions tailored to meet the unique demands of diverse sectors."
        highlight="Industries"
      />

      <div className="relative group/industries">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          navigation={{
            prevEl: ".industries-prev",
            nextEl: ".industries-next",
          }}
          pagination={{ clickable: true, el: ".industries-pagination" }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          className="pb-14"
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.name}>
              <div className="bg-white rounded-[18px] p-6 text-center premium-shadow border border-border/50 hover:border-secondary/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-[14px] bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <industry.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-[Poppins] font-semibold text-sm text-dark mb-1">{industry.name}</h4>
                <p className="text-xs text-gray-500">{industry.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="industries-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/industries:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="industries-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/industries:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}
