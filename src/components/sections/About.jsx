import { PROFILE } from "../../data/profile";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";

export const About = () => {
  return (
    <section className="pt-28 pb-28 sm:pt-32 sm:pb-28">
      <Container id="about" className="max-w-5xl">
        <SectionTitle label="Sobre mi">{PROFILE.about.title}</SectionTitle>

        <div className="relative mt-5 max-w-2xl border-l-2 border-primary-500/40 pl-5">
          <p className="text-lg font-medium italic leading-relaxed text-primary-600 dark:text-primary-300 sm:text-xl">
            Desarrollo soluciones que escalan y generan impacto real.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[300px_1fr] lg:items-start lg:gap-16">
          <div className="relative mx-auto w-fit lg:mx-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary-500/60 via-daintree-400/60 to-primary-600/60 opacity-60 blur-sm dark:opacity-40" />
            <div className="absolute -inset-5 rounded-full bg-primary-500/10 blur-2xl" />
            <img
              src={PROFILE.aboutAvatar}
              alt={PROFILE.name}
              className="relative h-60 w-60 rounded-full object-cover p-1 shadow-xl shadow-primary-900/15 ring-1 ring-white/15 dark:ring-dark-700 sm:h-64 sm:w-64"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,168,232,0.12), rgba(7,237,255,0.06))",
              }}
              loading="lazy"
            />
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-0 hidden h-full w-[1px] bg-gradient-to-b from-primary-500/50 via-dark-200/30 to-transparent lg:block dark:via-white/10" />

            <div className="space-y-5 text-[17px] leading-[1.8] text-dark-600 dark:text-dark-200/90 text-pretty">
              {PROFILE.about.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-[18px] font-medium text-dark-700 dark:text-dark-50"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/30 active:scale-95"
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

              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary-500/50 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
