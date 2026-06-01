import { PROJECTS } from "../../data/projects";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectCard } from "../ui/ProjectCard";

export const Projects = () => {
  return (
    <section className="pt-28 pb-28 motion-safe:animate-fade-up sm:pt-32 sm:pb-28">
      <Container id="projects" className="max-w-4xl">
        <SectionTitle label="Proyectos">Proyectos destacados</SectionTitle>
        <p className="mt-6 w-full max-w-none text-[15px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[16px] text-pretty">
          Cada proyecto es el resultado de convertir una idea en algo tangible. A través del diseño, la programación y la resolución de problemas, he construido soluciones que reflejan mi evolución como desarrollador y mi pasión por crear tecnología con propósito.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="text-[0.95rem] font-semibold text-primary-400 transition hover:text-primary-300"
          >
            Ver mas proyectos &gt;
          </a>
        </div>
      </Container>
    </section>
  );
};
