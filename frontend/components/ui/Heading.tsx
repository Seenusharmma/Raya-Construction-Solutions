"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface HeadingProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-4xl lg:text-5xl",
  lg: "text-4xl md:text-5xl lg:text-6xl",
  xl: "text-4xl md:text-5xl lg:text-7xl",
};

export default function Heading({
  title,
  subtitle,
  highlight,
  centered = true,
  light = false,
  className,
  size = "lg",
}: HeadingProps) {
  const words = title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-[Poppins] font-bold leading-[1.1] tracking-tight",
          sizeClasses[size],
          light ? "text-white" : "text-dark"
        )}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block mr-[0.3em]">
            {word === highlight ? (
              <span className="text-gradient">{word}</span>
            ) : (
              word
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "mt-5 max-w-2xl text-base md:text-lg leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/70" : "text-gray-500"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
