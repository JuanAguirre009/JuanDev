import { NAV_ITEMS } from "../../data/navigation";
import { Container } from "./Container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-12 pt-16">
      <Container className="max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-dark-200/40 pt-8 dark:border-white/[0.08] md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a
              href="#top"
              className="text-xl font-black tracking-tight text-primary-400 transition hover:text-primary-300"
            >
              JuanDev
            </a>
            <p className="text-xs text-dark-500 dark:text-dark-400">
              © {currentYear} Juan José Aguirre. Todos los derechos reservados.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-dark-600 transition hover:text-primary-500 dark:text-dark-200/90"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
};
