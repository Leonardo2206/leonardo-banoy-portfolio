import { useEffect, useState } from "react";

/**
 * El botón de descarga solo se muestra cuando el PDF existe y el servidor lo
 * entrega como PDF. Así no publicamos enlaces rotos si el archivo aún no se
 * ha generado con `npm run cv`.
 */
export function useCvAvailable(cvPath: string): boolean {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function check() {
      try {
        const response = await fetch(cvPath, {
          method: "HEAD",
          signal: controller.signal,
        });
        const contentType = response.headers.get("content-type") ?? "";

        if (response.ok && contentType.toLowerCase().includes("pdf")) {
          setAvailable(true);
        }
      } catch {
        // Sin PDF válido no se muestra el enlace. El script check-cv ya avisa
        // durante el build si el archivo falta o está corrupto.
      }
    }

    void check();

    return () => controller.abort();
  }, [cvPath]);

  return available;
}
