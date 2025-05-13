// src/components/common/FooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/common/Footer";

// Define routes where Footer should be hidden
const HIDDEN_FOOTER_ROUTES = ["/login", "/signup", "/not-found"];

export default function FooterWrapper() {
  const pathname = usePathname();

  // Check if current path should hide footer
  const shouldHideFooter = HIDDEN_FOOTER_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  return <>{!shouldHideFooter && <Footer />}</>;
}
