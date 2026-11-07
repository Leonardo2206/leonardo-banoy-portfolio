import type { Project } from "../data/portfolio";
import { BrowserFrame } from "./BrowserFrame";
import { Icon } from "./Icon";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const reversed = index % 2 === 1;
  const urlLabel = project.demoUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <article
      className={`project${reversed ? " project--reverse" : ""}`}
      id={`proyecto-${project.slug}`}
    >
      <div className="project__media">
        <button
          className="project__media-button"
          type="button"
          onClick={(event) => onOpen(project, event.currentTarget)}
          aria-label={`Abrir la ficha completa de ${project.name}`}
          aria-haspopup="dialog"
        >
          <BrowserFrame
            image={project.image}
            alt={project.imageAlt}
            urlLabel={urlLabel}
            priority={index === 0}
          />
          <span className="project__media-hint">
            Ver ficha
            <Icon name="arrow-up-right" size={15} />
          </span>
        </button>
        <p className="project__caption">
          <span className="status-dot" aria-hidden="true" />
          Captura real de la demo · {project.verifiedOn}
        </p>
      </div>

      <div className="project__body">
        <p className="project__meta">
          <span className="project__number">{number}</span>
          <span className="project__type">{project.type}</span>
        </p>
        <p className="project__context">
          {project.period}
          <span aria-hidden="true"> · </span>
          {project.context}
        </p>

        <h3 className="project__title">{project.name}</h3>
        <p className="project__tagline">{project.tagline}</p>
        <p className="project__summary">{project.summary}</p>

        <ul className="chip-list" aria-label={`Tecnologías de ${project.name}`}>
          {project.stack.map((technology) => (
            <li key={technology} className="chip">
              {technology}
            </li>
          ))}
        </ul>

        <div className="project__actions">
          <a
            className="project__link project__link--demo"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Ver demo
            <Icon name="external" size={15} />
          </a>
          <a
            className="project__link"
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon name="github" size={16} />
            Código
          </a>
          <button
            className="project__link project__link--details"
            type="button"
            onClick={(event) => onOpen(project, event.currentTarget)}
          >
            Ficha completa
            <Icon name="arrow-right" size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
