"use client";

import Section from "@/components/ui/Section";
import { clients } from "@/constants";

export default function Partners() {
  return (
    <Section className="py-16 md:py-20 border-y border-border/50">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
          Trusted by Industry Leaders
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 md:mx-12 flex-shrink-0"
            >
              <span className="text-lg md:text-xl font-[Poppins] font-bold text-gray-300 hover:text-primary transition-colors duration-300 cursor-default select-none">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
