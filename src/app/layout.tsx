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
    default: "Ricamado - Transform Your Living Space",
  },
  description: "Discover living spaces that inspire and transform your life.",

  keywords: [
    "Ricamado",
    "Real Estate in Lagos",
    "Affordable Homes Nigeria",
    "Buy Property in Nigeria",
    "Real Estate Developer Ogba",
    "Luxury Apartments",
    "Houses for sale in Lagos",
  ],
    openGraph: {
    title: "Ricamado - Transform Your Living Space",
    description: "Discover living spaces that inspire and transform your life.",
    url: "https://ricamado.com.ng",
    siteName: "Ricamado",
    images: [
      {
        url: "https://ricamado.com.ng/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Ricamado Real Estate",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavbarWrapper />
        <main className="min-h-screen">{children}</main>
        <ScrollButton />
        <FooterWrapper />
        <Toaster position="top-right" theme="light" />
      </body>
    </html>
  );
}
