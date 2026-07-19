"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { stats, heroSlides } from "@/constants";
import { useCountUp } from "@/hooks/useCountUp";
import "swiper/css";
import "swiper/css/effect-fade";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-[Poppins] font-bold text-white">
        {count}
        <span className="text-secondary">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199, 154, 59, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(199, 154, 59, ${0.05 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();
    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1500}
          className="w-full h-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i} className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-dark/85 via-primary-dark/70 to-dark/80" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2]"
      />

      <div className="absolute inset-0 z-[2] opacity-10">
        <div className="absolute inset-0 blueprint-bg" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[120px] animate-float z-[2]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-float-delayed z-[2]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-secondary" />
            
          </motion.div>

          <motion.h1 className="font-[Poppins] text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.05] mb-6">
            {"Building Tomorrow".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.5 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2.5 + 2 * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                with
              </motion.span>
            </span>
            <span className="text-gradient inline-block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2.5 + 3 * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                Precision
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.3 }}
            className="text-white/60 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
          >
            India&apos;s premier construction company delivering luxury residential, commercial, and
            industrial projects with engineering excellence and uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white text-sm font-semibold uppercase tracking-[0.15em] rounded-[10px] hover:bg-secondary-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Services
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white text-sm font-semibold uppercase tracking-[0.15em] rounded-[10px] hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.8 }}
        className="absolute bottom-20 left-0 right-0 z-10 hidden md:block"
      >
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
