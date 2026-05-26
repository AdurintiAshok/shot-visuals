"use client";

import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";

export default function ServicesPage() {
  return (
    <div className="pt-8">
      {/* Detailed bento-style services grid */}
      <Services />

      {/* Accordion FAQ block */}
      <FAQ />
    </div>
  );
}
