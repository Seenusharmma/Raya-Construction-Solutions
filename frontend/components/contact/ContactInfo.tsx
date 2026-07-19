"use client";

import { useRef } from "react";
import Section from "@/components/ui/Section";
import { siteConfig, officeLocations } from "@/constants";
import { Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    detail: siteConfig.phone,
    sub: "Mon - Sat, 9AM - 6PM",
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    detail: siteConfig.email,
    sub: "We reply within 24 hours",
    href: `mailto:${siteConfig.email}`,
  },
  ...officeLocations.map((office) => ({
    icon: MapPin,
    title: `${office.city} Office`,
    detail: office.address,
    sub: office.phone,
    href: "#map",
  })),
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 9:00 AM - 6:00 PM",
    sub: "Sunday: Closed",
    href: "#",
  },
];

export default function ContactInfo() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Section>
      <div className="relative group/contact">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: ".contact-prev",
            nextEl: ".contact-next",
          }}
          pagination={{ clickable: true, el: ".contact-pagination" }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          className="pb-14"
        >
          {contactCards.map((card) => (
            <SwiperSlide key={card.title}>
              <a
                href={card.href}
                className="block p-6 rounded-[18px] bg-white premium-shadow border border-border/50 hover:border-secondary/30 transition-all duration-300 text-center h-full"
              >
                <div className="w-14 h-14 rounded-[14px] bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <card.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-[Poppins] font-bold text-dark text-base mb-1">{card.title}</h3>
                <p className="text-sm text-dark font-medium">{card.detail}</p>
                <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="contact-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/contact:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="contact-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white premium-shadow border border-border/50 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/contact:opacity-100 cursor-pointer max-lg:hidden"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}
