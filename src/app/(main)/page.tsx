// src/app/(marketing)/page.tsx
import FeaturedProperties from "@/components/properties/FeaturedProperties";
import ClientTestimonials from "@/components/sections/ClientsTestimonials";
import FaqsSection from "@/components/sections/FaqsSection";
import HeroSection from "@/components/sections/HeroSections";
import { Metadata } from "next";
// import MissionStatement from '@/components/sections/MissionStatement';
// import WhyRicamado from '@/components/sections/WhyRicamado';
// import PropertySearch from '@/components/properties/PropertySearch';
// import ValueProposition from '@/components/sections/ValueProposition';

// SEO Optimization with Purpose-Driven Metadata
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
    <main className="bg-white">
      {/* Hero Section: Emphasize Purpose Over Product */}
      {/* <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Space, Your Story, Your Transformation
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            We believe your living space is more than an address—it's a catalyst for your dreams, growth, and potential.
          </p> */}

      {/* Purpose-Driven Search */}
      {/* <div className="max-w-2xl mx-auto">
            <PropertySearch 
              placeholder="Find spaces that resonate with your life's mission"
            />
          </div>
        </div>
      </section> */}

      {/* hero section */}
      <HeroSection />

      {/* Why We Exist: Philosophical Positioning */}
      {/* <WhyRicamado /> */}

      {/* Mission Statement: Deeper Context */}
      {/* <MissionStatement /> */}

      {/* Value Proposition: Differentiation */}
      {/* <ValueProposition /> */}

      {/* featured properties */}
      <FeaturedProperties />

      {/* client testimonials */}
      <ClientTestimonials />

      {/* faq  */}
      <FaqsSection faqs={[]} />
    </main>
  );
}
