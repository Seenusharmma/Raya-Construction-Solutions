"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [data-cursor='pointer'], input, textarea, select"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    addHoverListeners();
    const interval = setInterval(addHoverListeners, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(interval);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            ref={cursorRef}
            animate={{
              x: position.x - 20,
              y: position.y - 20,
              scale: isHovering ? 1.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
            className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
          >
            <div
              className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                isHovering
                  ? "border-secondary bg-secondary/20"
                  : "border-white/50 bg-white/10"
              }`}
            />
          </motion.div>
          <motion.div
            animate={{
              x: position.x - 3,
              y: position.y - 3,
              scale: isHovering ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 50,
            }}
            className="fixed top-0 left-0 z-[9998] pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
