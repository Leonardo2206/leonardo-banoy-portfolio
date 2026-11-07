import { existsSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { runBrowser } from "./browser.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const ogHtml = path.join(root, "scripts", "og.html");
const iconHtml = path.join(root, "scripts", "icon.html");
const ogImage = path.join(publicDir, "og-image.png");
const iconImage = path.join(publicDir, "apple-touch-icon.png");

mkdirSync(publicDir, { recursive: true });

runBrowser([
  "--force-device-scale-factor=1",
  "--window-size=1200,630",
  "--virtual-time-budget=2500",
  "--run-all-compositor-stages-before-draw",
  `--screenshot=${ogImage}`,
  pathToFileURL(ogHtml).href,
]);

runBrowser([
  "--force-device-scale-factor=1",
  "--window-size=180,180",
  "--virtual-time-budget=1500",
  "--run-all-compositor-stages-before-draw",
  `--screenshot=${iconImage}`,
  pathToFileURL(iconHtml).href,
]);

for (const file of [ogImage, iconImage]) {
  if (!existsSync(file)) {
    throw new Error(`No se generó ${path.relative(root, file)}`);
  }
  const size = statSync(file).size;
  if (size < 1_000) {
    throw new Error(`${path.basename(file)} parece vacío (${size} bytes).`);
  }
  console.log(`${path.relative(root, file)} — ${Math.round(size / 1024)} KB`);
}
