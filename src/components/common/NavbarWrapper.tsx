// src/components/common/NavBarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";

// Define routes where Navbar should be hidden
const HIDDEN_NAV_ROUTES = ["/login", "/signup", "/not-found"];

export default function NavBarWrapper() {
  const pathname = usePathname();

  // Check if current path should hide navigation
  const shouldHideNavBar = HIDDEN_NAV_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  return <>{!shouldHideNavBar && <Navbar />}</>;
}
