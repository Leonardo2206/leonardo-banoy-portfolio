import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "./App";
import { projects, site } from "./data/portfolio";

const html = renderToStaticMarkup(<App />);

describe("portafolio renderizado", () => {
  it("incluye todas las secciones principales", () => {
    for (const id of [
      "inicio",
      "perfil",
      "proyectos",
      "stack",
      "formacion",
      "experiencia",
      "trayectoria",
      "contacto",
    ]) {
      expect(html).toContain(`id="${id}"`);
    }
    expect(html).toContain('href="#contenido"');
    expect(html).toContain('aria-label="Leonardo Banoy"');
  });

  it("renderiza los proyectos y sus enlaces verificados", () => {
    for (const project of projects) {
      expect(html).toContain(project.name);
      expect(html).toContain(project.demoUrl);
      expect(html).toContain(project.codeUrl);
    }
  });

  it("incluye el contacto y no deja marcadores de plantilla visibles", () => {
    expect(html).toContain("leonardobanoy48@gmail.com");
    expect(html).toContain("github.com/Leonardo2206");
    expect(html).toContain("linkedin.com/in/leonardo-banoy-lopez");
    expect(html).toContain("CopyAdopters");
    expect(html).not.toContain("3219065254");
    expect(html).not.toContain("undefined");
    expect(html).not.toContain("NaN");
    expect(html).not.toContain("TODO");
    expect(html).not.toContain("lorem ipsum");
  });

  it("no muestra el enlace al CV si el PDF aún no se ha comprobado", () => {
    expect(html).not.toContain(site.cvPath);
  });

  it("usa enlaces externos con rel seguro", () => {
    const externalLinks = html.match(/<a[^>]+target="_blank"[^>]*>/g) ?? [];
    expect(externalLinks.length).toBeGreaterThan(5);
    for (const link of externalLinks) {
      expect(link).toContain('rel="noreferrer noopener"');
    }
  });
});
