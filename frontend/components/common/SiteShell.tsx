"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const ScrollProgress = dynamic(() => import("@/components/common/ScrollProgress"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/common/CustomCursor"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/common/BackToTop"), { ssr: false });
const FloatingActions = dynamic(() => import("@/components/common/FloatingActions"), { ssr: false });

export default function SiteShell({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
      <BackToTop />
      <FloatingActions />
    </>
  );
}
