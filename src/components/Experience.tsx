import { experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="section experience"
      aria-labelledby="experiencia-title"
    >
      <div className="container">
        <SectionHeading
          index="05"
          label="Experiencia"
          id="experiencia-title"
          title={
            <>
              Procesos reales,
              <br />
              <span className="text-muted">no solo código.</span>
            </>
          }
          description="Mi experiencia profesional hasta ahora está en soporte y automatización digital. Es el contexto donde aprendí a trabajar con herramientas de negocio y a resolver problemas concretos."
        />

        <div className="experience__list">
          {experience.map((entry) => (
            <article
              className="experience-card"
              key={`${entry.company}-${entry.role}`}
            >
              <div className="experience-card__head">
                <div className="experience-card__identity">
                  <p className="experience-card__period">{entry.period}</p>
                  <h3>{entry.role}</h3>
                  <p className="experience-card__company">
                    {entry.company}
                    <span aria-hidden="true"> · </span>
                    {entry.location}
                  </p>
                </div>
                <span className="experience-card__badge">GHL</span>
              </div>

              <div className="experience-card__body">
                <p className="experience-card__summary">{entry.summary}</p>
                <ul className="experience-card__list">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span aria-hidden="true">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <ul
                  className="chip-list experience-card__stack"
                  aria-label={`Herramientas usadas en ${entry.company}`}
                >
                  {entry.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
