"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { cn } from "@/utils/cn";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex fixed top-0 left-0 right-0 z-[55] h-10 bg-primary items-center justify-center gap-8"
      >
        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 text-white/70 hover:text-white text-xs transition-colors"
        >
          <Phone size={12} />
          <span>+91 98765 43210</span>
        </a>
        <a
          href="mailto:info@rayaconstruction.com"
          className="flex items-center gap-2 text-white/70 hover:text-white text-xs transition-colors"
        >
          <Mail size={12} />
          <span>info@rayaconstruction.com</span>
        </a>
      </motion.div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 bg-white",
          scrolled
            ? "top-0 lg:top-10 shadow-lg border-b border-border/50"
            : "top-10 lg:top-[40px]"
        )}
      >
        <nav className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-16 md:h-18" : "h-18 md:h-22"
            )}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/assets/logo.png"
                alt="Raya Construction and Solutions"
                width={200}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium text-dark/80 hover:text-secondary transition-colors duration-300 rounded-lg",
                      "hover:bg-secondary/5"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 min-w-[220px] bg-white rounded-[18px] p-2 shadow-2xl border border-border/50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-dark/70 hover:text-secondary hover:bg-secondary/5 rounded-[10px] transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-secondary text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-[10px] hover:bg-secondary-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-dark p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-[Poppins] font-bold text-white hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="flex flex-col items-center gap-2 mt-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-white/50 hover:text-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-3 bg-secondary text-white text-sm font-semibold uppercase tracking-[0.15em] rounded-[10px]"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    
    </>
  );
}
