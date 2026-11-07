import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { navItems, profile, site } from "../data/portfolio";
interface NavbarProps {
  cvAvailable: boolean;
}

export function Navbar({ cvAvailable }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a
          className="brand"
          href="#inicio"
          aria-label={`${profile.name} — ir al inicio`}
          onClick={closeMenu}
        >
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__text">
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.roleShort}</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {cvAvailable ? (
            <a
              className="header-cv"
              href={site.cvPath}
              download={site.cvFileName}
              title="Descargar CV en PDF"
              onClick={closeMenu}
            >
              <Icon name="download" size={15} />
              <span>CV</span>
            </a>
          ) : null}
          <a
            className="button button--small button--accent"
            href="#contacto"
            onClick={closeMenu}
          >
            Hablemos
            <Icon name="arrow-up-right" size={15} />
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-nav" id="menu-movil">
          <nav aria-label="Navegación móvil">
            <ul>
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                  >
                    <span className="mobile-nav__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                    <Icon name="arrow-right" size={18} />
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" onClick={closeMenu}>
                  <span className="mobile-nav__index">
                    {String(navItems.length + 1).padStart(2, "0")}
                  </span>
                  Contacto
                  <Icon name="arrow-right" size={18} />
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-nav__footer">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="mobile-nav__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="github" size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="linkedin" size={16} /> LinkedIn
              </a>
            </div>
            {cvAvailable ? (
              <a
                className="mobile-nav__cv"
                href={site.cvPath}
                download={site.cvFileName}
                onClick={closeMenu}
              >
                <Icon name="download" size={16} /> Descargar CV
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
