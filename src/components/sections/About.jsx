import { PROFILE } from "../../data/profile";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";

export const About = () => {
  return (
    <section className="pt-24 motion-safe:animate-fade-up">
      <Container id="about" className="max-w-5xl">
        <SectionTitle label="Sobre mi">{PROFILE.about.title}</SectionTitle>
        <div className="mt-10 grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="h-56 w-56 rounded-full object-cover shadow-xl shadow-primary-900/20"
            loading="lazy"
          />
          <div className="space-y-4 text-sm text-dark-600 dark:text-dark-200">
            {PROFILE.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-50/80 px-6 py-2 text-sm font-semibold text-dark-700 transition hover:border-primary-400 hover:text-primary-500 dark:border-dark-800 dark:bg-dark-900/60 dark:text-dark-100"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
