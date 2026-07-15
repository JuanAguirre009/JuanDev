import { useState } from "react";
import { EXPERIENCE } from "../../data/experience";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="pt-28 pb-28 sm:pt-32 sm:pb-28">
      <Container id="experience" className="max-w-4xl">
        <SectionTitle label="Experiencia">Trayectoria profesional</SectionTitle>

        <div className="relative mt-14 space-y-5">
          <div className="absolute left-6 top-4 bottom-4 hidden w-[2px] bg-gradient-to-b from-primary-500 via-daintree-400 to-transparent md:block" />

          {EXPERIENCE.map((item, index) => {
            const isItemOpen = openIndex === index;

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-dark-200/60 bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/30 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] dark:border-white/[0.08] dark:bg-dark-900/80 dark:shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] dark:hover:border-primary-400/20 dark:hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-primary-500 to-daintree-400 transition-transform duration-500 group-hover:scale-x-100" />

                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center gap-4 p-5 text-left transition-colors duration-200 md:gap-6 md:pl-14"
                >
                  <span className="hidden h-3 w-3 shrink-0 rounded-full bg-primary-400 ring-4 ring-white transition-transform duration-300 group-hover:scale-125 dark:ring-dark-950 md:block" />

                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-dark-800 transition-colors duration-200 group-hover:text-primary-600 dark:text-dark-50 dark:group-hover:text-primary-300 sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-300">
                        {item.company}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 self-start rounded-full border border-dark-200/70 bg-dark-50 px-3 py-1 text-[0.7rem] font-semibold text-dark-600 transition-colors duration-200 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300 sm:self-center">
                      {item.date}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className={`h-5 w-5 shrink-0 text-dark-400 transition-transform duration-300 dark:text-dark-500 ${
                      isItemOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isItemOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-dark-200/40 px-5 pb-6 pt-4 dark:border-white/[0.06] md:px-14">
                      <ul className="grid gap-3 text-[15px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:grid-cols-2">
                        {item.description.map((line, lineIndex) => (
                          <li
                            key={`${item.id}-${lineIndex}`}
                            className="flex gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary-400 to-daintree-400" />
                            <span className="text-pretty">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
