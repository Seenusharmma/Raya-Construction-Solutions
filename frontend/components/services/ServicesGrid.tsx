"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2, Compass, Palette, Landmark, Briefcase, Wrench, ClipboardList, HardHat,
};

export default function ServicesGrid() {
  return (
    <Section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-16"
      >
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Building2;
          const isReversed = i % 2 !== 0;

          return (
            <motion.div
              key={service.id}
              variants={staggerItem}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
            >
              <div className={`${isReversed ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-[14px] bg-primary/5 flex items-center justify-center">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="text-secondary text-xs uppercase tracking-[0.3em] font-semibold">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold text-dark mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-dark">
                      <CheckCircle size={14} className="text-secondary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Request Quote <ArrowRight size={14} />
                </a>
              </div>

              <div className={`${isReversed ? "lg:order-1" : ""}`}>
                <div className="rounded-[28px] overflow-hidden aspect-[4/3] relative premium-shadow">
                  <Image
                    src={serviceImages[service.id] || serviceImages.construction}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
