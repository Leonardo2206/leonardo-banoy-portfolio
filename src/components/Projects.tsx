import { useRef, useState } from "react";
import type { Project } from "../data/portfolio";
import { profile, projectDisclaimer, projects } from "../data/portfolio";
import { Icon } from "./Icon";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openProject(project: Project, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelected(project);
  }

  function closeProject() {
    setSelected(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  return (
    <section
      id="proyectos"
      className="section projects"
      aria-labelledby="proyectos-title"
    >
      <div className="container">
        <SectionHeading
          index="02"
          label="Proyectos"
          id="proyectos-title"
          title={
            <>
              Código público,
              <br />
              <span className="text-muted">demos reales.</span>
            </>
          }
          description={
            <>
              Tres aplicaciones desplegadas. Cada ficha incluye las decisiones
              técnicas y una nota honesta cuando algo sigue siendo una
              demostración.
            </>
          }
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>

        <div className="projects__footer">
          <p>{projectDisclaimer}</p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            Todos los repositorios
            <Icon name="arrow-up-right" size={15} />
          </a>
        </div>
      </div>

      {selected ? (
        <ProjectDialog project={selected} onClose={closeProject} />
      ) : null}
    </section>
  );
}
