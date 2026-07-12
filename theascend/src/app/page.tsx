import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ProgramTeaser } from "@/components/sections/program-teaser";
import { PerspectivesPreview } from "@/components/sections/perspectives-preview";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhoWeAre />
      <WhatWeDo />
      <ProgramTeaser />
      <PerspectivesPreview />
      <ContactSection />
    </>
  );
}
