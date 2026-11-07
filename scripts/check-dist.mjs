import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const indexPath = path.join(dist, "index.html");

if (!existsSync(indexPath)) {
  throw new Error("No existe dist/index.html. Ejecuta `npm run build` primero.");
}

const indexHtml = readFileSync(indexPath, "utf8");
const requiredPublicFiles = [
  "favicon.svg",
  "apple-touch-icon.png",
  "og-image.png",
  "images/leonardo.jpg",
  "projects/libra.jpg",
  "projects/ticket-system.jpg",
  "projects/ecommerce-gym.jpg",
  "cv/leonardo-banoy-cv.pdf",
];

const missing = [];

for (const relative of requiredPublicFiles) {
  const filePath = path.join(dist, relative);
  if (!existsSync(filePath) || statSync(filePath).size < 100) {
    missing.push(relative);
  }
}

if (missing.length > 0) {
  throw new Error(`Faltan assets en dist: ${missing.join(", ")}`);
}

const assetReferences = [...indexHtml.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map(
  (match) => match[1],
);

if (assetReferences.length === 0) {
  throw new Error("dist/index.html no referencia ningún asset compilado de Vite.");
}

for (const reference of assetReferences) {
  const filePath = path.join(dist, reference.replace(/^\//, ""));
  if (!existsSync(filePath)) {
    throw new Error(`Referencia rota en index.html: ${reference}`);
  }
}

const cvBuffer = readFileSync(path.join(dist, "cv", "leonardo-banoy-cv.pdf"));
if (cvBuffer.subarray(0, 5).toString("ascii") !== "%PDF-") {
  throw new Error("El CV copiado a dist no es un PDF válido.");
}

const outputFiles = [];
function collect(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(fullPath);
    else outputFiles.push(fullPath);
  }
}
collect(path.join(dist, "assets"));

const secretMarkers = [
  "SUPABASE_SERVICE_ROLE_KEY",
  "JWT_SECRET",
  "MONGO_URI",
  "DATABASE_URL",
  "service_role",
  "BEGIN PRIVATE KEY",
];

const textToScan = [
  indexHtml,
  ...outputFiles
    .filter((file) => /\.(?:js|css|html|json|txt|map)$/.test(file))
    .map((file) => readFileSync(file, "utf8")),
].join("\n");

for (const marker of secretMarkers) {
  if (textToScan.includes(marker)) {
    throw new Error(`Se encontró un marcador sensible en dist: ${marker}`);
  }
}

if (!indexHtml.includes("/og-image.png")) {
  throw new Error("index.html no incluye la imagen Open Graph.");
}

if (!indexHtml.includes("/favicon.svg")) {
  throw new Error("index.html no incluye el favicon.");
}

const totalBytes = outputFiles.reduce((total, file) => total + statSync(file).size, 0);

console.log(
  `Dist válido: ${assetReferences.length} assets referenciados, ${requiredPublicFiles.length} públicos, ` +
    `${Math.round(totalBytes / 1024)} KB de JS/CSS. Sin marcadores de secretos.`,
);
