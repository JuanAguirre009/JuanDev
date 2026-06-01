import { PROFILE } from "../../data/profile";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";

export const About = () => {
  return (
    <section className="pt-28 pb-28 motion-safe:animate-fade-up sm:pt-32 sm:pb-28">
      <Container id="about" className="max-w-5xl">
        <SectionTitle label="Sobre mi">{PROFILE.about.title}</SectionTitle>
        <div className="mt-12 grid gap-12 md:grid-cols-[260px_1fr] md:items-center">
          <img
            src={PROFILE.aboutAvatar}
            alt={PROFILE.name}
            className="h-60 w-60 rounded-full object-cover shadow-xl shadow-primary-900/20 ring-1 ring-white/10 dark:ring-dark-800 sm:h-64 sm:w-64"
            loading="lazy"
          />
          <div className="space-y-4 text-[16px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[17px] text-pretty">
            {PROFILE.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-800/80 px-6 py-2.5 text-sm font-semibold text-dark-50 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-400/60 hover:bg-dark-800/95 dark:border-dark-800 dark:bg-dark-900/70 dark:text-dark-100"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
