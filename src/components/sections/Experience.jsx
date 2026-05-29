import { EXPERIENCE } from "../../data/experience";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";

export const Experience = () => {
  return (
    <section className="pt-24 motion-safe:animate-fade-up">
      <Container id="experience" className="max-w-5xl">
        <SectionTitle label="Experiencia">Trayectoria profesional</SectionTitle>
        <div className="mt-10">
          <ul className="relative border-l border-dark-200/70 pl-6 dark:border-dark-800">
            {EXPERIENCE.map((item) => (
              <li key={item.date} className="mb-10">
                <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 ring-4 ring-white dark:ring-dark-950" />
                <div className="rounded-2xl border border-white/10 bg-dark-50/70 p-6 shadow-lg dark:border-dark-800 dark:bg-dark-900/60">
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-50">
                    {item.role}
                  </h3>
                  <p className="text-sm text-primary-500">
                    {item.company}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-dark-500 dark:text-dark-400">
                    {item.date}
                  </p>
                  <p className="mt-4 text-sm text-dark-600 dark:text-dark-200">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
