import { useState } from "react";
import { NAV_ITEMS } from "../../data/navigation";
import { SOCIAL_LINKS } from "../../data/socials";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderSocialLink = (link) => {
    const Icon = link.icon;
    const isExternal = link.href.startsWith("http");

    return (
      <a
        key={link.label}
        href={link.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="rounded-full border border-white/10 p-2 text-dark-700 transition hover:text-primary-500 dark:border-dark-800 dark:text-dark-200"
        aria-label={link.label}
      >
        <Icon className="size-4" />
      </a>
    );
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark-50/80 backdrop-blur dark:border-dark-800 dark:bg-dark-950/70">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-2xl font-black text-primary-500 dark:text-primary-400"
        >
          codev
        </a>

        <div className="flex items-center gap-3 md:order-2">
          <div className="hidden items-center gap-3 md:flex">
            {SOCIAL_LINKS.map(renderSocialLink)}
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-dark-700 transition hover:text-primary-500 dark:border-dark-800 dark:text-dark-200 md:hidden"
            onClick={handleToggle}
            aria-label="Toggle navigation"
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
          className={`w-full flex-col gap-6 pb-6 pt-4 md:order-1 md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:pb-0 md:pt-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClose}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-dark-700 transition hover:text-primary-500 dark:text-dark-200"
            >
              {item.label}
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
