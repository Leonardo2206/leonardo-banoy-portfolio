import { useEffect, useState } from "react";
import { contactCopy, profile, site } from "../data/portfolio";
import { Icon } from "./Icon";

interface ContactProps {
  cvAvailable: boolean;
}

type CopyState = "idle" | "copied" | "error";

export function Contact({ cvAvailable }: ContactProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const timer = window.setTimeout(() => setCopyState("idle"), 2800);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <section id="contacto" className="section contact" aria-labelledby="contacto-title">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__glow" aria-hidden="true" />
          <div className="contact__top">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {contactCopy.eyebrow}
            </p>
            <span className="contact__availability">
              <span aria-hidden="true" /> Abierto a oportunidades
            </span>
          </div>

          <h2 id="contacto-title" className="contact__title">
            {contactCopy.title}
          </h2>
          <p className="contact__description">{contactCopy.description}</p>
          <p className="contact__availability-note">
            <span className="status-dot" aria-hidden="true" />
            {contactCopy.availability}
          </p>

          <div className="contact__email-row">
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
              <Icon name="arrow-up-right" size={24} />
            </a>
            <button
              className="copy-button"
              type="button"
              onClick={copyEmail}
              aria-label="Copiar correo electrónico"
            >
              <Icon
                name={copyState === "copied" ? "check" : "copy"}
                size={17}
              />
              {copyState === "copied"
                ? "Copiado"
                : copyState === "error"
                  ? "No se pudo copiar"
                  : "Copiar"}
            </button>
            <span className="visually-hidden" role="status" aria-live="polite">
              {copyState === "copied"
                ? "Correo copiado al portapapeles"
                : copyState === "error"
                  ? "No fue posible copiar el correo"
                  : ""}
            </span>
          </div>

          <div className="contact__links">
            <a
              className="contact-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="contact-link__label">
                <Icon name="github" size={18} />
                GitHub
              </span>
              <span className="contact-link__value">
                {profile.githubHandle}
                <Icon name="arrow-up-right" size={15} />
              </span>
            </a>

            <a
              className="contact-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="contact-link__label">
                <Icon name="linkedin" size={18} />
                LinkedIn
              </span>
              <span className="contact-link__value">
                {profile.linkedinLabel}
                <Icon name="arrow-up-right" size={15} />
              </span>
            </a>

            <div className="contact-link contact-link--static">
              <span className="contact-link__label">
                <Icon name="map-pin" size={18} />
                Ubicación
              </span>
              <span className="contact-link__value">{profile.location}</span>
            </div>

            {cvAvailable ? (
              <a
                className="contact-link"
                href={site.cvPath}
                download={site.cvFileName}
              >
                <span className="contact-link__label">
                  <Icon name="download" size={18} />
                  CV
                </span>
                <span className="contact-link__value">
                  PDF · una página
                  <Icon name="arrow-up-right" size={15} />
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
