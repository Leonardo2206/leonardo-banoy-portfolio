import { learning, skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="stack" className="section skills" aria-labelledby="stack-title">
      <div className="container">
        <SectionHeading
          index="03"
          label="Stack"
          id="stack-title"
          title={
            <>
              Herramientas,
              <br />
              <span className="text-muted">no porcentajes.</span>
            </>
          }
          description="Sin barras de progreso inventadas: esto es lo que aparece en los proyectos y lo que estoy estudiando ahora."
        />

        <div className="skills__layout">
          <div className="skills__groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.label}>
                <div className="skill-group__head">
                  <h3>{group.label}</h3>
                  <span aria-hidden="true">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="skill-group__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="learning-card">
            <span className="learning-card__label">En aprendizaje</span>
            <h3>Lo siguiente en la lista.</h3>
            <p>
              Temas que estoy profundizando para escribir mejores APIs y tomar
              mejores decisiones de arquitectura.
            </p>
            <ol className="learning-list">
              {learning.map((item, index) => (
                <li key={item}>
                  <span className="learning-list__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="learning-list__name">{item}</span>
                  <span className="learning-list__state">En curso</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
