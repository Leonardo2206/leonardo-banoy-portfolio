import { SectionHeading } from "./SectionHeading";
import { profile } from "../data/portfolio";

export function About() {
  return (
    <section
      id="perfil"
      className="section about"
      aria-labelledby="perfil-title"
    >
      <div className="container">
        <SectionHeading
          index="01"
          label="Perfil"
          id="perfil-title"
          title={
            <>
              Backend por enfoque,
              <br />
              <span className="text-muted">full-stack por necesidad.</span>
            </>
          }
          description="La parte que no se ve es la que hace que todo lo demás funcione."
        />

        <div className="about__grid">
          <div className="about__bio">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="fact-card" aria-label="Ficha rápida">
            <div className="fact-card__top">
              <span>Ficha rápida</span>
              <span className="fact-card__status">2026</span>
            </div>
            <dl className="fact-card__list">
              {profile.facts.map((fact) => (
                <div key={fact.label} className="fact-card__row">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a
              className="fact-card__link"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              {profile.githubHandle}
              <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>

        <div className="principles">
          <p className="principles__label">Cómo trabajo</p>
          <div className="principles__grid">
            {profile.principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <span className="principle__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
