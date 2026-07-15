import { Container } from "../layout/Container";
import { Pill } from "../ui/Pill";
import { PROFILE } from "../../data/profile";
import { SOCIAL_LINKS } from "../../data/socials";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-24 motion-safe:animate-fade-up sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      <Container className="max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {PROFILE.headline ? (
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-primary-400/90">
                {PROFILE.headline}
              </p>
            ) : null}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-800 dark:text-dark-50 sm:text-5xl lg:text-6xl">
              {PROFILE.greeting}{" "}
              <span className="text-primary-500 dark:text-primary-400">
                {PROFILE.name}
              </span>
            </h1>
            <span className="inline-flex text-base font-semibold text-dark-600 dark:text-dark-200 sm:text-lg">
              {PROFILE.role}
            </span>
            <div className="max-w-2xl space-y-4 text-[16px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[17px] text-pretty">
              {PROFILE.summary.map((line, index) => (
                <p key={`${line.text}-${index}`}>
                  {line.text}
                  {line.highlight ? (
                    <span className={line.accentClass}>{line.highlight}</span>
                  ) : null}
                  {line.suffix}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
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
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary-500/10 blur-2xl" />
              <img
                src={PROFILE.heroAvatar}
                alt={PROFILE.name}
                className="relative h-60 w-60 rounded-full object-cover shadow-2xl shadow-primary-900/30 ring-1 ring-white/10 dark:ring-dark-800 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                loading="eager"
                fetchpriority="high"
                width="288"
                height="288"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 justify-center text-sm font-medium text-primary-500 dark:text-primary-400 md:flex">
          <a
            href="#experience"
            className="flex items-center gap-2 transition hover:text-primary-300"
          >
            Experiencia
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 animate-bounce"
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
