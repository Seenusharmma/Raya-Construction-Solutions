"use client";

import SiteShell from "@/components/common/SiteShell";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutAwards from "@/components/about/AboutAwards";
import CTA from "@/components/common/CTA";

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutAwards />
      <CTA />
    </SiteShell>
  );
}
