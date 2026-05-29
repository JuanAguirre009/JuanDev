import { Container } from "../layout/Container";
import { Pill } from "../ui/Pill";
import { PROFILE } from "../../data/profile";
import { SOCIAL_LINKS } from "../../data/socials";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-28 lg:pt-40 motion-safe:animate-fade-up"
    >
      <Container className="max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
              {PROFILE.headline}
            </p>
            <h1 className="text-4xl font-bold text-dark-800 dark:text-dark-50 sm:text-5xl lg:text-6xl">
              {PROFILE.greeting}{" "}
              <span className="text-primary-500 dark:text-primary-400">
                {PROFILE.name}
              </span>
            </h1>
            <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] bg-[length:250%_100%] bg-clip-text text-lg font-semibold text-transparent dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)]">
              {PROFILE.role}
            </span>
            <div className="space-y-3 text-base text-dark-600 dark:text-dark-200">
              {PROFILE.summary.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Pill key={link.label} href={link.href}>
                    <Icon className="size-4" />
                    {link.label}
                  </Pill>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-600"
              >
                Ver CV
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-dark-700 transition hover:border-primary-400 hover:text-primary-500 dark:border-dark-800 dark:text-dark-200"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary-500/10 blur-2xl" />
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="relative h-56 w-56 rounded-full object-cover shadow-2xl shadow-primary-900/30 sm:h-64 sm:w-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-14 hidden justify-center text-sm text-primary-500 dark:text-primary-400 md:flex">
          <a href="#experience" className="flex items-center gap-2 animate-bounce">
            Experiencia
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
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};
