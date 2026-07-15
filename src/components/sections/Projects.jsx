import { PROJECTS } from "../../data/projects";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectCard } from "../ui/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-28 pb-28 sm:pt-32 sm:pb-28"
    >
      <Container className="max-w-4xl">
        <SectionTitle label="Proyectos">
          Proyectos destacados
        </SectionTitle>

        <p className="mt-6 w-full max-w-none text-pretty text-[15px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[16px]">
          Cada proyecto es el resultado de convertir una idea en algo tangible.
          A través del diseño, la programación y la resolución de problemas,
          he construido soluciones que reflejan mi evolución como desarrollador
          y mi pasión por crear tecnología con propósito.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/JuanAguirre009"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-400/10 px-6 py-3 text-sm font-semibold text-primary-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/60 hover:bg-primary-400/20 hover:text-primary-300 active:scale-95"
          >
            Ver más proyectos en GitHub
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
};
