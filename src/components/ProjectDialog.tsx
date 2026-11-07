import { useEffect, useRef } from "react";
import type { Project } from "../data/portfolio";
import { BrowserFrame } from "./BrowserFrame";
import { Icon } from "./Icon";

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const urlLabel = project.demoUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}
    >
      <div className="project-dialog__panel">
        <div className="project-dialog__top">
          <span className="project-dialog__kicker">
            {project.type} · Demo verificada {project.verifiedOn}
          </span>
          <button
            className="project-dialog__close"
            type="button"
            onClick={closeDialog}
            aria-label="Cerrar ficha del proyecto"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="project-dialog__layout">
          <div className="project-dialog__media">
            <BrowserFrame
              image={project.image}
              alt={project.imageAlt}
              urlLabel={urlLabel}
              priority
            />
          </div>

          <div className="project-dialog__content">
            <h2 id="project-dialog-title" className="project-dialog__title">
              {project.name}
            </h2>
            <p className="project-dialog__tagline">{project.tagline}</p>
            <p className="project-dialog__meta">
              {project.period}
              <span aria-hidden="true"> · </span>
              {project.context}
            </p>
            <p className="project-dialog__overview">{project.overview}</p>

            <div className="project-dialog__section">
              <h3>Qué incluye</h3>
              <ul className="detail-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span className="detail-list__mark" aria-hidden="true">
                      +
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-dialog__section">
              <h3>Stack</h3>
              <ul className="chip-list" aria-label={`Stack de ${project.name}`}>
                {project.stack.map((technology) => (
                  <li key={technology} className="chip">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            {project.note ? (
              <p className="project-dialog__note">
                <span aria-hidden="true">Nota /</span>
                {project.note}
              </p>
            ) : null}

            <div className="project-dialog__actions">
              <a
                className="button button--accent button--small"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Abrir demo
                <Icon name="external" size={15} />
              </a>
              <a
                className="button button--ghost button--small"
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="github" size={16} />
                Ver código
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
