import { NAV_ITEMS } from "../../data/navigation";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="mt-20 pb-10">
      <Container className="max-w-6xl">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-dark-50/70 p-6 text-sm text-dark-700 shadow-lg backdrop-blur dark:border-dark-800 dark:bg-dark-900/50 dark:text-dark-200 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="font-semibold hover:text-primary-500">
            JuanDev
          </a>
          <nav className="flex flex-wrap items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-primary-500"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-6 text-center text-xs text-dark-500 dark:text-dark-400">
          Inspirado en portfolios modernos de desarrolladores.
        </div>
      </Container>
    </footer>
  );
};
