import { describe, expect, it } from "vitest";
import {
  academic,
  certifications,
  experience,
  learning,
  navItems,
  profile,
  projects,
  site,
  skillGroups,
  trajectory,
} from "./portfolio";

describe("contenido del portafolio", () => {
  it("mantiene los datos de contacto verificables", () => {
    expect(profile.name).toBe("Leonardo Banoy");
    expect(profile.legalName).toBe("Leonardo Banoy López");
    expect(profile.role).toMatch(/Tecnólogo/i);
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(profile.github).toBe("https://github.com/Leonardo2206");
    expect(profile.linkedin).toContain("linkedin.com/in/leonardo-banoy-lopez");
    expect(profile.location).toContain("Colombia");
    expect(site.cvPath).toBe("/cv/leonardo-banoy-cv.pdf");
  });

  it("define las secciones de navegación sin duplicados", () => {
    expect(navItems.length).toBeGreaterThanOrEqual(6);
    expect(new Set(navItems.map((item) => item.id)).size).toBe(navItems.length);
    expect(navItems.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "perfil",
        "proyectos",
        "stack",
        "formacion",
        "experiencia",
        "trayectoria",
      ]),
    );
  });

  it("incluye solo los tres proyectos verificados, con URLs y recursos", () => {
    expect(projects).toHaveLength(3);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(3);

    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(2);
      expect(project.summary.length).toBeGreaterThan(60);
      expect(project.overview.length).toBeGreaterThan(80);
      expect(project.highlights.length).toBeGreaterThanOrEqual(4);
      expect(project.stack.length).toBeGreaterThanOrEqual(5);
      expect(project.period.length).toBeGreaterThan(3);
      expect(project.context.length).toBeGreaterThan(3);
      expect(project.image).toMatch(/^\/projects\/.+\.jpg$/);
      expect(project.imageAlt.length).toBeGreaterThan(20);
      expect(project.demoUrl).toMatch(/^https:\/\//);
      expect(project.codeUrl).toMatch(/^https:\/\/github\.com\/Leonardo2206\//);
      expect(project.verifiedOn).toContain("2026");
      expect(project.note?.length).toBeGreaterThan(20);
      expect(() => new URL(project.demoUrl)).not.toThrow();
      expect(() => new URL(project.codeUrl)).not.toThrow();
    }
  });

  it("declara el estado real de la demo de EcommerceGym", () => {
    const ecommerce = projects.find((project) => project.slug === "ecommerce-gym");
    expect(ecommerce).toBeDefined();
    expect(ecommerce?.summary.toLowerCase()).toContain("no procesa pagos reales");
    expect(ecommerce?.note?.toLowerCase()).toContain("no procesa pagos reales");
  });

  it("no publica porcentajes ni métricas inventadas", () => {
    const serialized = JSON.stringify({
      profile,
      projects,
      skillGroups,
      trajectory,
      experience,
    });
    expect(serialized).not.toMatch(/\b\d{1,3}\s*%\b/);
    expect(serialized).not.toMatch(/años de experiencia/i);
    expect(serialized).not.toMatch(/\+\s*\d+\s*(clientes|usuarios|proyectos)/i);
  });

  it("mantiene las habilidades y el aprendizaje alineados al perfil", () => {
    const allSkills = skillGroups.flatMap((group) => group.items);
    expect(allSkills).toEqual(
      expect.arrayContaining(["TypeScript", "Express 5", "PostgreSQL", "MongoDB", "React"]),
    );
    expect(learning).toEqual(
      expect.arrayContaining(["PostgreSQL", "Prisma ORM", "Docker", "TypeScript avanzado"]),
    );
    expect(trajectory).toHaveLength(3);
  });

  it("registra la formación académica real", () => {
    expect(academic).toHaveLength(2);
    expect(academic.map((entry) => entry.program)).toEqual(
      expect.arrayContaining([
        "Tecnólogo en Desarrollo de Software",
        "Ingeniería de Software",
      ]),
    );

    const degree = academic.find((entry) => entry.program.includes("Tecnólogo"));
    expect(degree?.institution).toContain("UNIMINUTO");
    expect(degree?.period).toBe("2023 – 2026");
    expect(degree?.status).toBe("Graduado");

    const engineering = academic.find((entry) => entry.program.includes("Ingeniería"));
    expect(engineering?.status).toBe("Estudiante");
  });

  it("registra las certificaciones y la experiencia aportadas", () => {
    expect(certifications).toHaveLength(3);
    expect(certifications.map((certification) => certification.acronym)).toEqual(
      expect.arrayContaining(["FSDCS", "BDCP", "FDCA"]),
    );

    expect(experience).toHaveLength(1);
    expect(experience[0].company).toBe("CopyAdopters");
    expect(experience[0].period).toBe("Octubre 2025 – Enero 2026");
    expect(experience[0].highlights).toHaveLength(3);
  });

  it("no expone el teléfono en el contenido público del sitio", () => {
    const serialized = JSON.stringify({
      profile,
      projects,
      skillGroups,
      learning,
      trajectory,
      academic,
      certifications,
      experience,
      site,
    });
    expect(serialized).not.toMatch(/321\s*906\s*5254|3219065254/);
  });

  it("no contiene marcadores de secretos", () => {
    const serialized = JSON.stringify({
      profile,
      projects,
      skillGroups,
      learning,
      trajectory,
      academic,
      certifications,
      experience,
      site,
    });
    expect(serialized).not.toMatch(/SUPABASE_SERVICE_ROLE_KEY|JWT_SECRET|MONGO_URI|DATABASE_URL/);
  });
});
