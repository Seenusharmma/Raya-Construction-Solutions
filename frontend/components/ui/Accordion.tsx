"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "@/types";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-border rounded-[18px] overflow-hidden bg-white premium-shadow"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer hover:bg-muted/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-[Poppins] font-semibold text-base md:text-lg text-dark pr-4">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-500 leading-relaxed text-sm md:text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
