"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/animations";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <Section className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-dark p-12 md:p-20 text-center"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 blueprint-bg" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-light/20 rounded-full blur-[120px]" />

        <div className="relative z-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[Poppins] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Let&apos;s Build Something
            <br />
            <span className="text-gradient">Extraordinary Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Ready to transform your vision into reality? Get in touch with our experts
            and let&apos;s discuss your next project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" variant="secondary" size="lg">
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </Button>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white text-sm font-semibold uppercase tracking-[0.15em] rounded-[10px] hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
