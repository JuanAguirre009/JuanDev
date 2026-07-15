import { Container } from "../layout/Container";
import { Pill } from "../ui/Pill";
import { PROFILE } from "../../data/profile";
import { SOCIAL_LINKS } from "../../data/socials";
import { FaCode } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center pt-28 pb-24 motion-safe:animate-fade-up sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      <Container className="max-w-5xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="order-2 space-y-6 lg:order-1">
            {PROFILE.headline ? (
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-primary-400/90">
                {PROFILE.headline}
              </p>
            ) : null}

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-800 dark:text-dark-50 sm:text-5xl lg:text-6xl">
              {PROFILE.greeting}{" "}
              <span className="bg-gradient-to-r from-primary-500 to-daintree-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-daintree-300">
                {PROFILE.name}
              </span>
            </h1>

            <p className="inline-flex items-center gap-2 text-base font-semibold text-primary-600 dark:text-primary-300 sm:text-lg">
              <FaCode className="size-5" />
              {PROFILE.role}
            </p>

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

            <div className="flex flex-wrap gap-3 pt-2 sm:gap-4">
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

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary-500 via-daintree-400 to-primary-600 opacity-75 blur-sm dark:opacity-60" />
              <div className="absolute -inset-4 rounded-full bg-primary-500/10 blur-2xl" />
              <img
                src={PROFILE.heroAvatar}
                alt={PROFILE.name}
                className="relative h-60 w-60 rounded-full object-cover p-1.5 ring-1 ring-white/20 dark:ring-dark-700 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,168,232,0.15), rgba(7,237,255,0.08))",
                }}
                loading="eager"
                fetchpriority="high"
                width="288"
                height="288"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex">
          <a
            href="#experience"
            className="group flex flex-col items-center gap-1 text-xs font-medium text-dark-400 transition hover:text-primary-500 dark:text-dark-400 dark:hover:text-primary-400"
            aria-label="Ir a experiencia"
          >
            <span className="uppercase tracking-[0.2em]">Experiencia</span>
            <span className="h-10 w-[1.5px] rounded-full bg-gradient-to-b from-primary-500/80 to-transparent transition-all group-hover:h-12" />
          </a>
        </div>
      </Container>
    </section>
  );
};
