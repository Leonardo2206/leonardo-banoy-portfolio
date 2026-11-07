import { Icon } from "./Icon";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Portafolio · 2026
            <span className="eyebrow__separator" aria-hidden="true">
              /
            </span>
            Villavicencio, CO
          </p>

          <h1
            id="hero-title"
            className="hero__title"
            aria-label={profile.name}
          >
            <span>{profile.firstName}</span>
            <span>
              {profile.lastName}
              <span className="hero__title-dot">.</span>
            </span>
          </h1>

          <p className="hero__statement">
            APIs claras. Datos consistentes.
            <br />
            <span className="text-muted">Productos que funcionan.</span>
          </p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="button button--accent" href="#proyectos">
              Ver proyectos
              <Icon name="arrow-right" size={17} />
            </a>
            <a className="button button--ghost" href="#contacto">
              Escríbeme
              <Icon name="arrow-up-right" size={17} />
            </a>
          </div>

          <div className="hero__social">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="github" size={17} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="linkedin" size={17} />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" size={17} />
              Correo
            </a>
          </div>
        </div>

        <div className="hero__aside">
          <div className="id-card-wrap">
            <figure className="id-card">
              <div className="id-card__top">
                <span>Ficha / dev-01</span>
                <span>2026</span>
              </div>

              <div className="id-card__photo">
                <img
                  src="/images/leonardo.jpg"
                  alt="Retrato de Leonardo Banoy"
                  width="460"
                  height="460"
                />
                <span className="id-card__stamp" aria-hidden="true">
                  Software
                  <br />
                  developer
                </span>
              </div>

              <figcaption className="id-card__body">
                <span className="id-card__name">{profile.name}</span>
                <span className="id-card__role">
                  Node.js · TypeScript · PostgreSQL
                </span>
                <span className="id-card__meta">
                  <Icon name="map-pin" size={14} />
                  Villavicencio, Colombia
                </span>
              </figcaption>

              <div className="id-card__footer" aria-hidden="true">
                <span className="id-card__barcode" />
                <span>LB–2026 / CO</span>
              </div>
            </figure>

            <p className="hero__learning">
              <span>Ahora</span>
              Profundizando PostgreSQL, Prisma y Docker.
            </p>
          </div>
        </div>
      </div>

      <div className="hero__rail container">
        <span className="hero__scroll">
          <span className="hero__scroll-line" aria-hidden="true" />
          Sigue bajando
        </span>
        <span className="hero__stack-line">
          TypeScript <span aria-hidden="true">·</span> Node.js{" "}
          <span aria-hidden="true">·</span> Express <span aria-hidden="true">·</span>{" "}
          React <span aria-hidden="true">·</span> PostgreSQL{" "}
          <span aria-hidden="true">·</span> MongoDB
        </span>
      </div>
    </section>
  );
}
