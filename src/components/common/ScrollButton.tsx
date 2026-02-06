// "use client";

// import { useState, useEffect } from "react";
// import { ArrowUp } from "lucide-react";

// export default function ScrollButton() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return visible ? (
//     <button
//       onClick={scrollToTop}
//       className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
//     >
//       <ArrowUp className="h-5 w-5" />
//     </button>
//   ) : null;
// }

// src/components/common/ScrollButton.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;

      // Check if at bottom of page
      const isBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 10;
      setIsAtBottom(isBottom);

      // Show button when scrolled past 300px
      setVisible(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,

      behavior: "smooth",
    });
  };

  const handleClick = () => {
    if (isAtBottom) {
      scrollToTop();
    } else if (scrollDirection === "down") {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  };

  const getButtonIcon = () => {
    if (isAtBottom) {
      return <ArrowUp className="h-5 w-5" />;
    }
    return scrollDirection === "down" ? (
      <ArrowDown className="h-5 w-5" />
    ) : (
      <ArrowUp className="h-5 w-5" />
    );
  };

  const getButtonTitle = () => {
    if (isAtBottom) {
      return "Scroll to top";
    }
    return scrollDirection === "down" ? "Scroll to bottom" : "Scroll to top";
  };

  return visible ? (
    <button
      onClick={handleClick}
      title={getButtonTitle()}
      className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
    >
      {getButtonIcon()}
    </button>
  ) : null;
}
