import { PROJECTS } from "../../data/projects";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectCard } from "../ui/ProjectCard";

export const Projects = () => {
  return (
    <section className="pt-28 pb-28 motion-safe:animate-fade-up sm:pt-32 sm:pb-28">
      <Container id="projects" className="max-w-5xl">
        <SectionTitle label="Proyectos">Seleccion destacada</SectionTitle>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-dark-600 dark:text-dark-200/90 sm:text-[17px] text-pretty">
          Proyectos recientes donde combine estrategia, tecnologia y resultados
          medibles.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={project.featured}
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
