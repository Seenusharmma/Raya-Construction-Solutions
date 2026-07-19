"use client";

import SiteShell from "@/components/common/SiteShell";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import CTA from "@/components/common/CTA";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <ProjectsHero />
      <ProjectsGrid />
      <CTA />
    </SiteShell>
  );
}
