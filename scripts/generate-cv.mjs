import { existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { runBrowser } from "./browser.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "scripts", "cv.html");
const outputDir = path.join(root, "public", "cv");
const outputPath = path.join(outputDir, "leonardo-banoy-cv.pdf");

if (!existsSync(htmlPath)) {
  throw new Error(`No existe la plantilla del CV: ${htmlPath}`);
}

mkdirSync(outputDir, { recursive: true });
rmSync(outputPath, { force: true });

runBrowser([
  "--virtual-time-budget=2500",
  "--run-all-compositor-stages-before-draw",
  "--no-pdf-header-footer",
  `--print-to-pdf=${outputPath}`,
  pathToFileURL(htmlPath).href,
]);

if (!existsSync(outputPath)) {
  throw new Error("El navegador no generó el PDF del CV.");
}

const size = statSync(outputPath).size;

if (size < 15_000) {
  throw new Error(`El PDF parece demasiado pequeño (${size} bytes). Revisa la plantilla.`);
}

console.log(
  `CV generado: ${path.relative(root, outputPath)} (${Math.round(size / 1024)} KB)`,
);
