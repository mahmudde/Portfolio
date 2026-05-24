"use client";

import { useEffect } from "react";

export default function InitialScroll() {
  useEffect(() => {
    // Add a small delay to ensure everything (especially Lenis) is initialized
    const timer = setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
