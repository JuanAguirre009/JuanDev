export const Pill = ({ children, href, external = true }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-50/80 px-4 py-2 text-xs font-semibold text-dark-700 transition hover:scale-[1.02] hover:border-primary-400/60 hover:text-primary-500 dark:border-dark-800 dark:bg-dark-900/70 dark:text-dark-100"
    >
      {children}
    </a>
  );
};
