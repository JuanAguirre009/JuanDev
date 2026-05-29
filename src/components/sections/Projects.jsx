import { PROJECTS } from "../../data/projects";
import { Container } from "../layout/Container";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectCard } from "../ui/ProjectCard";

export const Projects = () => {
  return (
    <section className="pt-24 motion-safe:animate-fade-up">
      <Container id="projects" className="max-w-6xl">
        <SectionTitle label="Proyectos">Seleccion destacada</SectionTitle>
        <p className="mt-4 max-w-2xl text-sm text-dark-600 dark:text-dark-200">
          Proyectos recientes donde combine estrategia, tecnologia y resultados
          medibles.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
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
            className="text-sm font-semibold text-primary-500 transition hover:text-primary-400"
          >
            Ver mas proyectos
          </a>
        </div>
      </Container>
    </section>
  );
};
