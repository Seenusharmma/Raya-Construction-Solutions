"use client";

import SiteShell from "@/components/common/SiteShell";
import PageLoader from "@/components/common/PageLoader";
import Hero from "@/components/hero/Hero";
import AboutPreview from "@/components/about/AboutPreview";
import Services from "@/components/services/Services";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import WhyChoose from "@/components/services/WhyChoose";
import WorkProcess from "@/components/common/WorkProcess";
import Testimonials from "@/components/testimonials/Testimonials";
import Partners from "@/components/common/Partners";
import CTA from "@/components/common/CTA";

export default function HomePage() {
  return (
    <SiteShell>
      <PageLoader />
      <Hero />
      <AboutPreview />
      <Services />
      <FeaturedProjects />
      <WhyChoose />
      <WorkProcess />
      <Testimonials />
      <Partners />
      <CTA />
    </SiteShell>
  );
}
