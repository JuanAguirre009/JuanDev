import { PROFILE } from "../../data/profile";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";

export const About = () => {
  return (
    <section className="pt-28 pb-28 sm:pt-32 sm:pb-28">
      <Container id="about" className="max-w-5xl">
        <SectionTitle label="Sobre mi">{PROFILE.about.title}</SectionTitle>

        <div className="mt-12 grid gap-12 md:grid-cols-[280px_1fr] md:items-center">
          <div className="relative mx-auto w-fit transition-transform duration-500 hover:scale-[1.02] md:mx-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary-500/50 to-daintree-400/50 opacity-60 blur-md dark:opacity-40" />
            <img
              src={PROFILE.aboutAvatar}
              alt={PROFILE.name}
              className="relative h-60 w-60 rounded-full object-cover shadow-xl shadow-primary-900/20 ring-1 ring-white/10 transition-shadow duration-500 dark:ring-dark-800 sm:h-64 sm:w-64"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 text-[16px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[17px] text-pretty">
            {PROFILE.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-800/80 px-6 py-2.5 text-sm font-semibold text-dark-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/60 hover:bg-dark-800/95 hover:shadow-lg active:scale-95 dark:border-dark-800 dark:bg-dark-900/70 dark:text-dark-100"
            >
              Ver CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
