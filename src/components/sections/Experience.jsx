import { EXPERIENCE } from "../../data/experience";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";

export const Experience = () => {
  return (
    <section className="pt-28 pb-28 motion-safe:animate-fade-up sm:pt-32 sm:pb-28">
      <Container id="experience" className="max-w-5xl">
        <SectionTitle label="Experiencia">Trayectoria profesional</SectionTitle>
        <div className="mt-12">
          <ul className="relative border-l border-dark-200/80 dark:border-dark-800">
            {EXPERIENCE.map((item) => (
              <li key={item.date} className="mb-8 ml-6 md:mb-7">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-dark-600 ring-8 ring-dark-50 dark:bg-dark-600 dark:ring-dark-950">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-primary-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <h3 className="mb-1 flex flex-wrap items-center gap-2 text-lg font-semibold text-primary-500 dark:text-primary-300 sm:text-xl">
                  {item.role}
                  <span className="font-normal text-dark-700 dark:text-dark-200">
                    -
                  </span>
                  <span className="text-sm text-crusta-800 dark:text-crusta-300/90">
                    {item.company}
                  </span>
                </h3>
                <time className="mb-3 block text-sm text-dark-500 dark:text-dark-300">
                  {item.date}
                </time>
                <ul className="mb-4 space-y-3 text-[16px] font-normal leading-relaxed text-dark-600 dark:text-dark-200/90">
                  {item.description.map((line, index) => (
                    <li key={`${item.role}-${index}`} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400/90" />
                      <span className="text-pretty">{line}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
