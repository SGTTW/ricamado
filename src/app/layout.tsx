// src/app/layout.tsx

import { Metadata } from "next";
import "@/app/globals.css";

import NavbarWrapper from "@/components/common/NavbarWrapper";
import FooterWrapper from "@/components/common/FooterWrapper";
import ScrollButton from "@/components/common/ScrollButton";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Ricamado - Purposeful Living Spaces",
    default:
      "Ricamado - Transform Your Living Space | Premium Real Estate in Lagos, Nigeria",
  },
  description: "Discover living spaces that inspire and transform your life.",

  keywords: [
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
    "purposeful living spaces",
  ],

  authors: [
    {
      name: "Ricamado Unique Limited",
      url: "https://ricamado.com.ng",
    },
  ],

  creator: "Ricamado Unique Limited",
  publisher: "Ricamado Unique Limited",

  metadataBase: new URL("https://ricamado.com.ng"),

  alternates: {
    canonical: "https://ricamado.com.ng",
  },

  openGraph: {
    title: "Ricamado - Transform Your Living Space",
    description: "Discover living spaces that inspire and transform your life.",
    url: "https://ricamado.com.ng",
    siteName: "Ricamado Unique Limited",
    images: [
      {
        url: "https://ricamado.com.ng/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Ricamado Unique Limited",
      },
    ],
    locale: "en",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ricamado - Transform Your Living Space",
    description:
      "Discover premium real estate and purposeful living spaces in Nigeria.",
    images: ["https://ricamado.com.ng/og_image.jpg"],
    // creator: "@RicamadoUL",  https://x.com/RicamadoUL
    creator: "@RicamadoUL",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "kaELjRtljMO2tnLe9kcwXaqdzbAqL2J2zAVFcpDB_5g",
  },

  // <meta name="google-site-verification" content="kaELjRtljMO2tnLe9kcwXaqdzbAqL2J2zAVFcpDB_5g" />

  category: "Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        {/* Homepage Structured Data
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ricamado - Transform Your Living Space",
            description:
              "Discover living spaces that inspire and transform your life.",
            url: "https://ricamado.com.ng",
            mainEntity: {
              "@type": "RealEstateAgent",
              name: "Ricamado Unique Limited",
              description:
                "Discover living spaces that inspire and transform your life.",
              areaServed: "Nigeria",
              serviceType: [
                "Real Estate Development",
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
 
 */}

        <head>
          {/* Additional SEO Meta Tags */}
          <meta name="geo.region" content="NG-LA" />
          <meta name="geo.placename" content="Lagos, Nigeria" />
          <meta name="geo.position" content="6.5244;3.3792" />
          <meta name="ICBM" content="6.5244, 3.3792" />

          {/* Business Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                name: "Ricamado Unique Limited",
                url: "https://ricamado.com.ng",
                logo: "https://ricamado.com.ng/images/logo/logo.png",
                image: "https://ricamado.com.ng/og_image.jpg",
                description:
                  "Transform your life with premium real estate in Lagos. Luxury apartments, affordable homes, and purposeful living spaces.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Agege",
                  addressLocality: "Lagos",
                  addressRegion: "Lagos State",
                  addressCountry: "Nigeria",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+234-803-295-1740",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                },
                sameAs: [
                  "https://www.facebook.com/61574643453053/",
                  "https://x.com/RicamadoUL",
                ],
                areaServed: {
                  "@type": "Place",
                  name: "Lagos, Nigeria",
                },
                serviceType: "Real Estate Consultant/Agent",
              }),
            }}
          />

          {/* Preload critical resources */}
          <link rel="preload" href="/images/logo/logo.png" as="image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </head>

        <body className="flex flex-col min-h-screen">
          <NavbarWrapper />
          <main className="min-h-screen">{children}</main>
          <ScrollButton />
          <FooterWrapper />
          <Toaster position="top-right" theme="light" />
        </body>
      </html>
    </>
  );
}
