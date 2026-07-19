"use client";

import SiteShell from "@/components/common/SiteShell";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesIndustries from "@/components/services/ServicesIndustries";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import CTA from "@/components/common/CTA";

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesHero />
      <ServicesGrid />
      <ServicesIndustries />
      <ServicesFAQ />
      <CTA />
    </SiteShell>
  );
}
