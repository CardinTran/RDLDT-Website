"use client";

import { useEffect, useState } from "react";

export default function ScrollToExplore() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`pointer-events-none fixed bottom-8 right-8 z-30 hidden items-center gap-4 transition-opacity duration-200 lg:flex ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6C531F] bg-[rgba(10,10,10,0.42)] text-[#D9A63F] backdrop-blur-sm">
        ↓
      </div>
      <span className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#B89C62]">Scroll to Explore</span>
    </div>
  );
}
