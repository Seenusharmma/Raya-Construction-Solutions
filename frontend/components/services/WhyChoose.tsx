"use client";

import { useRef } from "react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/constants";
import {
  Award,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function StatBlock({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl lg:text-6xl font-[Poppins] font-bold text-white mb-2">
        {count}
        <span className="text-secondary">{suffix}</span>
      </div>
      <div className="text-white/60 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}

const reasons = [
  {
    icon: Award,
    title: "Certified Excellence",
    desc: "ISO 9001:2015 certified with all national safety and quality standards compliance.",
  },
  {
    icon: Shield,
    title: "Safety First",
    desc: "Zero-compromise safety protocols with dedicated safety officers on every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Advanced project management ensuring 98% on-time project completion rate.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "100+ certified engineers, architects, and skilled professionals at your service.",
  },
  {
    icon: CheckCircle,
    title: "Premium Materials",
    desc: "Only the finest materials sourced from trusted brands and certified suppliers.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    desc: "Cutting-edge construction technology including BIM, drones, and smart systems.",
  },
];

export default function WhyChoose() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <Section dark className="overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StatBlock
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <Heading
          title="Why Choose Raya"
          subtitle="We don't just build structures; we build trust, relationships, and landmarks that stand the test of time."
          highlight="Raya"
          light
        />

        <div className="relative group/whychoose">
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
              prevEl: ".whychoose-prev",
              nextEl: ".whychoose-next",
            }}
            pagination={{ clickable: true, el: ".whychoose-pagination" }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            className="pb-14"
          >
            {reasons.map((reason) => (
              <SwiperSlide key={reason.title}>
                <div className="glass-card rounded-[18px] p-8 hover:border-secondary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-[12px] bg-secondary/10 flex items-center justify-center mb-5">
                    <reason.icon size={22} className="text-secondary" />
                  </div>
                  <h3 className="font-[Poppins] font-bold text-lg text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="whychoose-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer max-lg:hidden"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="whychoose-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer max-lg:hidden"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Section>
    </>
  );
}
