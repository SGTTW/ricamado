// src/app/page.tsx

import FeaturedProperties from "@/components/properties/FeaturedProperties";
import ClientTestimonials from "@/components/sections/ClientsTestimonials";
import FaqsSection from "@/components/sections/FaqsSection";
import HeroSection from "@/components/sections/HeroSections";
import { Metadata } from "next";
import WhyRicamado from "@/components/sections/WhyRicamado";
import { faqs } from "@/lib/faqs";
import CTA from "@/components/sections/CTA";
import ScrollReveal from "@/components/animation/ScrollReveal";

// SEO Optimization
export const metadata: Metadata = {
  title: "Ricamado: Purposeful Living Spaces | Beyond Real Estate",
  description:
    "Transform your life through intentional living spaces. We don't just find properties; we enable life-changing experiences.",
  keywords: [
    "purposeful living",
    "intentional spaces",
    "transformative real estate",
    "Ricamado",
    "Ricamado Unique Limited",
    "Real Estate in Lagos",
    "Affordable Homes Nigeria",
    "Buy Property in Nigeria",
    "Real Estate Developer Ogba",
    "Luxury Apartments",
    "Houses for sale in Lagos",
    "Lagos real estate",
    "luxury apartments Lagos",
    "affordable homes Nigeria",
    "property developer Ogba",
    "real estate investment Lagos",
    "buy property Lagos",
    "purposeful living spaces",
    "transformative real estate",
    "premium apartments Nigeria",
    "real estate Lagos State",
  ],

  openGraph: {
    title:
      "Ricamado Unique Limited - Transforming lives through intentional living spaces",
    description:
      "Transform your life with premium real estate in Lagos. Luxury apartments, affordable homes, and purposeful living spaces.",
    images: [
      {
        url: "https://ricamado.com.ng/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Ricamado Unique Limited - Transforming lives through intentional living spaces",
      },
    ],
  },

  alternates: {
    canonical: "https://ricamado.com.ng",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Homepage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ricamado Unique Limited - Transforming lives through intentional living spaces",
            description:
              "Transform your life with premium real estate in Lagos, Ogun, Abuja,  Nigeria. Luxury apartments and affordable homes.",
            url: "https://ricamado.com.ng",
            mainEntity: {
              "@type": "RealEstateAgent",
              name: "Ricamado Unique Limited",
              description:
                "Premium real estate developer specializing in luxury apartments and affordable homes in Nigeria.",
              areaServed:
                "We operate across major Nigerian cities including Lagos, Abuja, Port Harcourt, and more.",
              serviceType: [
                "Real Estate Consultant",
                "Real Estate Agent",
                "Property Sales",
                "Real Estate Investment",
                "Property Management",
              ],
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ricamado.com.ng",
                },
              ],
            },
          }),
        }}
      />

      <div className="bg-white">
        {/* Main Sections */}
        <section aria-label="ricamado unique limited">
          <HeroSection />
        </section>

        <section aria-label="why ricamado">
          <ScrollReveal direction="up" delay={0.1}>
            <WhyRicamado />
          </ScrollReveal>
        </section>

        <section aria-label="featured properties">
          <ScrollReveal direction="up" delay={0.1}>
          <FeaturedProperties />
          </ScrollReveal>
        </section>

        <section aria-label="testimonials">
           <ScrollReveal direction="up" delay={0.1}>
          <ClientTestimonials />
          </ScrollReveal>
        </section>

        <section aria-label="frequently asked questions">
          <ScrollReveal direction="up" delay={0.1}>
          <FaqsSection faqs={faqs} />
          </ScrollReveal>
        </section>

        <section aria-label="contact us">
          <ScrollReveal direction="up" delay={0.1}>
          <CTA />
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
