// src/components/common/NavbarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";

// Define routes where Navbar should be hidden
const HIDDEN_NAV_ROUTES = ["/login", "/signup", "/not-found"];

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Check if current path should hide navigation
  const shouldHideNavbar = HIDDEN_NAV_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  return <>{!shouldHideNavbar && <Navbar />}</>;
}
