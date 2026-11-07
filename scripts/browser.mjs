import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const EDGE_CANDIDATES = [
  process.env.EDGE_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

export function findBrowser() {
  for (const candidate of EDGE_CANDIDATES) {
    if (existsSync(candidate)) return candidate;
  }

  throw new Error(
    "No encontré Microsoft Edge ni Google Chrome. Define EDGE_PATH con la ruta del navegador.",
  );
}

export function runBrowser(args, options = {}) {
  const browser = findBrowser();
  const profile = mkdtempSync(path.join(tmpdir(), "portfolio-browser-"));

  try {
    const result = spawnSync(
      browser,
      [
        "--headless=new",
        "--disable-gpu",
        "--disable-extensions",
        "--disable-background-networking",
        "--disable-sync",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-first-run",
        "--no-default-browser-check",
        "--allow-file-access-from-files",
        "--hide-scrollbars",
        `--user-data-dir=${profile}`,
        ...args,
      ],
      {
        stdio: "inherit",
        timeout: options.timeout ?? 120_000,
        windowsHide: true,
      },
    );

    if (result.error) throw result.error;
    if (result.status !== 0) {
      throw new Error(`El navegador terminó con código ${result.status ?? "desconocido"}.`);
    }
  } finally {
    try {
      rmSync(profile, { recursive: true, force: true, maxRetries: 4, retryDelay: 150 });
    } catch {
      // Windows puede tardar en liberar el perfil temporal. No es crítico.
    }
  }
}
