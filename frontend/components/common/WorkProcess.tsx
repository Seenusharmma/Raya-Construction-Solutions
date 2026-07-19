"use client";

import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { processSteps } from "@/constants";
import { staggerContainer, staggerItem } from "@/animations";

export default function WorkProcess() {
  return (
    <Section id="process" className="bg-muted/30">
      <Heading
        title="Our Work Process"
        subtitle="A streamlined five-step approach that ensures every project is delivered with precision, quality, and on schedule."
        highlight="Process"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4"
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={staggerItem}
            className="relative flex flex-col items-center text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative z-10 w-20 h-20 rounded-[20px] bg-white border-2 border-border group-hover:border-secondary group-hover:bg-primary flex items-center justify-center mb-5 transition-all duration-500 shadow-lg"
            >
              <span className="font-[Poppins] font-bold text-2xl text-primary group-hover:text-white transition-colors duration-500">
                {step.step}
              </span>
            </motion.div>

            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] right-[-40%] h-[2px]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-border to-secondary/30 origin-left"
                />
              </div>
            )}

            <h3 className="font-[Poppins] font-bold text-base text-dark mb-2 group-hover:text-primary transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
