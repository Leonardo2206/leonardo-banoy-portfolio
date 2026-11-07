import {
  academic,
  certifications,
  learning,
  profile,
} from "../data/portfolio";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section
      id="formacion"
      className="section education"
      aria-labelledby="formacion-title"
    >
      <div className="container">
        <SectionHeading
          index="04"
          label="Formación"
          id="formacion-title"
          title={
            <>
              Aprender haciendo,
              <br />
              <span className="text-muted">con base académica.</span>
            </>
          }
          description="Formación académica, certificaciones y los temas que estoy profundizando ahora."
        />

        <div className="education__grid">
          <article className="education-card education-card--main">
            <div className="education-card__top">
              <span className="card-label">Aprendizaje continuo</span>
              <span className="education-card__badge">En curso</span>
            </div>
            <h3>La base que sigo ampliando.</h3>
            <p>
              Además de la formación académica, profundizo en las piezas que
              hacen que un backend sea más sólido y fácil de mantener.
            </p>
            <ul className="education-topics">
              {learning.map((topic, index) => (
                <li key={topic}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
            <a
              className="inline-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              Ver el perfil de GitHub
              <Icon name="arrow-up-right" size={15} />
            </a>
          </article>

          {academic.map((entry) => (
            <article
              className="education-card education-card--academic"
              key={entry.program}
            >
              <div className="education-card__top">
                <span className="card-label">Formación académica</span>
                <span
                  className={`education-card__badge${
                    entry.status === "Graduado"
                      ? " education-card__badge--muted"
                      : ""
                  }`}
                >
                  {entry.status}
                </span>
              </div>
              <h3>{entry.program}</h3>
              <p>{entry.institution}</p>
              <p className="education-card__period">
                {entry.period} · {entry.location}
              </p>
              {entry.note ? (
                <p className="education-card__note">{entry.note}</p>
              ) : null}
            </article>
          ))}

          <article className="education-card education-card--certs">
            <div className="education-card__top">
              <span className="card-label">Certificaciones</span>
              <span className="education-card__badge">2025</span>
            </div>
            <h3>Formación complementaria.</h3>
            <ul className="cert-list">
              {certifications.map((certification) => (
                <li key={certification.acronym}>
                  <div className="cert-list__top">
                    <span className="cert-list__name">
                      {certification.name}
                    </span>
                    <span className="cert-list__acronym">
                      {certification.acronym} · {certification.year}
                    </span>
                  </div>
                  {certification.description ? (
                    <p>{certification.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
