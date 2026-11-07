import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cvPath = path.join(root, "public", "cv", "leonardo-banoy-cv.pdf");

if (!existsSync(cvPath)) {
  throw new Error(
    "No existe public/cv/leonardo-banoy-cv.pdf. Ejecuta `npm run cv` antes de validar.",
  );
}

const size = statSync(cvPath).size;
const buffer = readFileSync(cvPath);
const header = buffer.subarray(0, 5).toString("ascii");
const tail = buffer.subarray(Math.max(0, buffer.length - 2048)).toString("latin1");

if (header !== "%PDF-") {
  throw new Error(`El archivo no empieza con %PDF- (encontrado: ${header}).`);
}

if (size < 15_000) {
  throw new Error(`El PDF es demasiado pequeño (${size} bytes).`);
}

if (!tail.includes("%%EOF")) {
  throw new Error("El PDF no contiene el marcador final %%EOF; puede estar truncado.");
}

const content = buffer.toString("latin1");
const pagesMatch = content.match(
  /\/Type\s*\/Pages[\s\S]{0,200}?\/Count\s+(\d+)/,
);

if (!pagesMatch) {
  throw new Error("No pude determinar el número de páginas del PDF.");
}

const pages = Number(pagesMatch[1]);

if (pages !== 1) {
  throw new Error(
    `El CV debe ocupar una página (encontradas: ${pages}). Ajusta scripts/cv.html y ejecuta \`npm run cv\`.`,
  );
}

console.log(
  `CV válido: public/cv/leonardo-banoy-cv.pdf (${Math.round(size / 1024)} KB, 1 página, %PDF- + %%EOF).`,
);
