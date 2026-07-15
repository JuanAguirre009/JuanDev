import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../../data/navigation";
import { SOCIAL_LINKS } from "../../data/socials";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);
    const topSection = document.querySelector("#top");
    const allSections = topSection ? [topSection, ...sections] : sections;

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
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const renderSocialLink = (link) => {
    const Icon = link.icon;
    const isExternal = link.href.startsWith("http");

    return (
      <a
        key={link.label}
        href={link.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="rounded-full border border-white/10 bg-dark-50/80 p-2 text-dark-500 transition hover:scale-110 hover:border-primary-400/60 hover:text-primary-500 dark:border-dark-800 dark:bg-dark-900/60 dark:text-dark-200 dark:hover:text-primary-300"
        aria-label={link.label}
      >
        <Icon className="size-4" />
      </a>
    );
  };

  const isActive = (href) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-dark-950/70 shadow-[0_10px_30px_rgba(2,6,23,0.35)] backdrop-blur">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:px-8 md:grid md:max-w-5xl md:grid-cols-[auto_1fr_auto] md:items-center">
        <a
          href="#top"
          className="text-2xl font-black tracking-tight text-primary-400 transition hover:text-primary-300 sm:text-3xl"
        >
          JuanDev
        </a>

        <div className="flex items-center gap-3 md:order-2">
          <div className="hidden items-center gap-3 md:flex">
            {SOCIAL_LINKS.map(renderSocialLink)}
          </div>
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            className="rounded-full border border-white/10 bg-dark-50/80 p-2 text-dark-500 transition hover:border-primary-400/60 hover:text-primary-300 dark:border-dark-800 dark:bg-dark-900/60 dark:text-dark-200 md:hidden"
            onClick={handleToggle}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`w-full flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-dark-950/95 px-4 py-6 shadow-2xl transition-all duration-300 md:order-1 md:flex md:w-auto md:flex-row md:items-center md:justify-center md:gap-8 md:border-none md:bg-transparent md:p-0 md:shadow-none ${
            isOpen
              ? "mt-4 flex opacity-100"
              : "hidden opacity-0 md:flex md:opacity-100"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClose}
              className={`relative text-[0.95rem] font-medium tracking-wide transition hover:text-primary-500 ${
                isActive(item.href)
                  ? "text-primary-500"
                  : "text-dark-200/90 dark:text-dark-200/90"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary-500 transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
          <div className="flex items-center gap-3 md:hidden">
            {SOCIAL_LINKS.map(renderSocialLink)}
          </div>
        </div>
      </nav>
    </header>
  );
};
