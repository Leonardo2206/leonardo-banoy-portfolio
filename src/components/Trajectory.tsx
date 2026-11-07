import { learning, profile, trajectory } from "../data/portfolio";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Trajectory() {
  return (
    <section
      id="trayectoria"
      className="section trajectory"
      aria-labelledby="trayectoria-title"
    >
      <div className="container">
        <SectionHeading
          index="06"
          label="Trayectoria"
          id="trayectoria-title"
          title={
            <>
              Proyectos como
              <br />
              <span className="text-muted">punto de partida.</span>
            </>
          }
          description="La ruta técnica detrás de cada proyecto: qué construí, qué aprendí y por qué tomé cada decisión."
        />

        <div className="trajectory__layout">
          <aside className="trajectory__aside">
            <p className="trajectory__statement">
              Mi carta de presentación son tres aplicaciones desplegadas y las
              decisiones técnicas detrás de ellas.
            </p>
            <p className="trajectory__copy">
              La experiencia laboral está en la sección anterior. Aquí está el
              recorrido técnico: los problemas que resolví y lo que cada
              proyecto me dejó.
            </p>
            <a className="inline-link" href="#proyectos">
              Revisar los proyectos
              <Icon name="arrow-right" size={15} />
            </a>
            <div className="trajectory__now">
              <span className="card-label">Ahora mismo</span>
              <p>{learning.join(" · ")}</p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                {profile.githubHandle}
                <Icon name="arrow-up-right" size={14} />
              </a>
            </div>
          </aside>

          <ol className="timeline">
            {trajectory.map((entry) => (
              <li className="timeline__item" key={entry.index}>
                <span className="timeline__index" aria-hidden="true">
                  {entry.index}
                </span>
                <div className="timeline__content">
                  <div className="timeline__head">
                    <span>{entry.project}</span>
                    <span className="timeline__dot" aria-hidden="true" />
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                  <a
                    className="timeline__link"
                    href={`#proyecto-${entry.slug}`}
                  >
                    Ver {entry.project}
                    <Icon name="arrow-right" size={14} />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
