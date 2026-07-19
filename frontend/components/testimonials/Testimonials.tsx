"use client";

import { useRef } from "react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { testimonials } from "@/constants";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section dark className="overflow-hidden">
      <Heading
        title="What Our Clients Say"
        subtitle="Trusted by leading builders, architects, and developers across India for delivering exceptional results."
        highlight="Clients"
        light
      />

      <div className="relative group/testimonials">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".testimonials-prev",
            nextEl: ".testimonials-next",
          }}
          pagination={{ clickable: true, el: ".testimonials-pagination" }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          className="pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="max-w-3xl mx-auto glass-card rounded-[28px] p-8 md:p-12 relative">
                <Quote size={48} className="text-secondary/20 absolute top-6 left-6" />

                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-secondary fill-secondary" />
                  ))}
                </div>

                <p className="text-white/80 text-base md:text-lg leading-relaxed text-center mb-8 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-[Poppins] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-[Poppins] font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/50">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer max-lg:hidden"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer max-lg:hidden"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </Section>
  );
}
