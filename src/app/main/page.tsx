// src/app/main/page.tsx
import FeaturedProperties from "@/components/properties/FeaturedProperties";
import ClientTestimonials from "@/components/sections/ClientsTestimonials";
import FaqsSection from "@/components/sections/FaqsSection";
import HeroSection from "@/components/sections/HeroSections";
import { Metadata } from "next";
import WhyRicamado from "@/components/sections/WhyRicamado";
import { faqs } from "@/lib/faqs";
import CTA from "@/components/sections/CTA";

// SEO Optimization 
export const metadata: Metadata = {
  title: "Ricamado: Purposeful Living Spaces | Beyond Real Estate",
  description:
    "Transform your life through intentional living spaces. We don't just find properties; we enable life-changing experiences.",
  keywords: [
    "purposeful living",
    "intentional spaces",
    "transformative real estate",
  ],
};

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyRicamado />
      <FeaturedProperties />
      <ClientTestimonials />
      <FaqsSection faqs={faqs} />
      <CTA />
    </div>
  );
}
