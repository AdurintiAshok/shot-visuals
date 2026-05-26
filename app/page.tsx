"use client";

import Hero from "@/components/sections/Hero";
import ServiceFlow from "@/components/sections/ServiceFlow";
import SocialProof from "@/components/sections/SocialProof";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      {/* Fullscreen Hero with Interactive cards */}
      <Hero />

      {/* Workflow split comparison blueprint */}
      <ServiceFlow />

      {/* Social Proof Stats */}
      <SocialProof />

      {/* Creator horizontal marquee scrolling testimonials */}
      <Testimonials />

      {/* Conversions callout panel */}
      <CTA />
    </>
  );
}
