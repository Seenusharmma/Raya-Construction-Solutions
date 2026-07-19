"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { servicesHeroImage } from "@/constants";

export default function ServicesHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
      <Image
        src={servicesHeroImage}
        alt="Construction services"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-primary-dark/70 to-dark/80" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-secondary" />
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-semibold">
              Our Services
            </span>
          </div>
          <h1 className="font-[Poppins] text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
            Comprehensive
            <br />
            <span className="text-gradient">Construction Solutions</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            From concept to completion, we deliver end-to-end construction services
            with unmatched quality and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
