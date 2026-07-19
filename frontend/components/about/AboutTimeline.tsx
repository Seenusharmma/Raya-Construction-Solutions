"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { staggerContainer, staggerItem } from "@/animations";

const milestones = [
  { year: "1999", title: "Founded", desc: "Raya Construction established in Mumbai with a vision for excellence." },
  { year: "2005", title: "First Major Project", desc: "Completed our first 100-unit residential project in Pune." },
  { year: "2010", title: "National Expansion", desc: "Expanded operations to Delhi, Bangalore, and Hyderabad." },
  { year: "2015", title: "500+ Projects", desc: "Crossed the milestone of 500 completed projects." },
  { year: "2018", title: "ISO Certification", desc: "Achieved ISO 9001:2015 and ISO 14001:2015 certifications." },
  { year: "2020", title: "Green Building Initiative", desc: "Launched sustainable construction and green building practices." },
  { year: "2024", title: "Industry Leader", desc: "Recognized as one of India's top construction companies." },
];

export default function AboutTimeline() {
  return (
    <Section className="bg-muted/30">
      <Heading
        title="Our Journey"
        subtitle="Key milestones that have shaped our growth from a small firm to an industry leader."
        highlight="Journey"
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              variants={staggerItem}
              className={`relative flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10 md:-translate-x-1/2 mt-1" />

              <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                <span className="text-secondary font-[Poppins] font-bold text-lg">{milestone.year}</span>
                <h3 className="font-[Poppins] font-bold text-dark text-lg mt-1">{milestone.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
