"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl",
  secondary:
    "bg-secondary text-white hover:bg-secondary-light shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "text-primary hover:bg-primary/5",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-10 py-4.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ease-out cursor-pointer",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <motion.span
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
