import { useEffect, useState } from "react";

export const useActiveSection = (navItems, defaultSection = "top") => {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const topSection = document.querySelector("#top");
    const allSections = topSection ? [topSection, ...sections] : sections;

    if (allSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    allSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  return activeSection;
};
