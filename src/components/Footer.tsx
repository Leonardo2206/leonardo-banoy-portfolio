import { profile, site } from "../data/portfolio";
import { Icon } from "./Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <span className="brand__mark" aria-hidden="true">
              {profile.initials}
            </span>
            <div>
              <span className="site-footer__name">{profile.name}</span>
              <span className="site-footer__role">{profile.role}</span>
            </div>
          </div>

          <a className="site-footer__top-link" href="#inicio">
            Volver arriba
            <Icon name="arrow-up" size={16} />
          </a>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {profile.name}. Contenido verificado el {site.lastVerified}.
          </p>
          <div className="site-footer__links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="github" size={15} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="linkedin" size={15} />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" size={15} />
              Correo
            </a>
          </div>
          <p className="site-footer__build">React + Vite · IBM Plex</p>
        </div>
      </div>
    </footer>
  );
}
