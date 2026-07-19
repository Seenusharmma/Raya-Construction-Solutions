"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { officeLocations } from "@/constants";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  const [activeOffice, setActiveOffice] = useState(officeLocations[0].id);
  const currentOffice = officeLocations.find((o) => o.id === activeOffice) || officeLocations[0];

  return (
    <Section id="map" className="!py-12">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {officeLocations.map((office) => (
          <button
            key={office.id}
            onClick={() => setActiveOffice(office.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeOffice === office.id
                ? "bg-primary text-white shadow-lg"
                : "bg-muted text-gray-500 hover:bg-primary/5 hover:text-primary"
            }`}
          >
            <MapPin size={14} />
            {office.city}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[28px] overflow-hidden border border-border/50 premium-shadow"
      >
        <iframe
          key={currentOffice.id}
          src={currentOffice.mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Raya Construction ${currentOffice.city} Office`}
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {officeLocations.map((office) => (
          <div
            key={office.id}
            className={`p-5 rounded-[14px] border transition-all duration-300 cursor-pointer ${
              activeOffice === office.id
                ? "bg-primary/5 border-primary/30"
                : "bg-white border-border/50 hover:border-secondary/30"
            }`}
            onClick={() => setActiveOffice(office.id)}
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} className="text-primary" />
              <h4 className="font-[Poppins] font-semibold text-dark text-sm">{office.city} Office</h4>
            </div>
            <p className="text-gray-500 text-sm">{office.address}</p>
            <p className="text-gray-400 text-xs mt-1">{office.phone}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
