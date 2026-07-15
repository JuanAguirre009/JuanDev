import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";
import { PROFILE } from "../../data/profile";
import { SOCIAL_LINKS } from "../../data/socials";
import { FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="pt-28 pb-28 sm:pt-32 sm:pb-28">
      <Container id="contact" className="max-w-5xl">
        <SectionTitle label="Contacto">Hablemos</SectionTitle>

        <div className="mt-12 flex flex-col items-center text-center">
          <p className="max-w-2xl text-[16px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[17px] text-pretty">
            ¿Tienes una oportunidad, un proyecto o simplemente quieres conversar
            sobre tecnología? Estoy abierto a nuevos retos y conexiones.
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary-400/30 bg-primary-400/10 px-8 py-4 text-lg font-semibold text-primary-600 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/60 hover:bg-primary-400/20 hover:text-primary-700 active:scale-95 dark:text-primary-300 dark:hover:text-primary-200"
          >
            <FaEnvelope className="size-5 transition-transform duration-300 group-hover:scale-110" />
            {PROFILE.email}
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.filter((link) => link.label !== "Email").map(
              (link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-50/80 px-5 py-2.5 text-sm font-semibold text-dark-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/70 hover:text-primary-500 active:scale-95 dark:border-dark-800 dark:bg-dark-900/70 dark:text-dark-100 dark:hover:text-primary-300"
                  >
                    <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                    {link.label}
                  </a>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
