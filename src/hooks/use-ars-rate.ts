"use client";

import { useEffect, useState } from "react";

/**
 * API pública y gratuita (sin key) que devuelve la cotización del
 * dólar en Argentina. Si en algún momento preferís otra fuente,
 * basta con cambiar esta URL y el campo leído más abajo (`venta`).
 */
const ENDPOINT = "https://dolarapi.com/v1/dolares/blue";
const TIMEOUT_MS = 4000;

type DolarApiResponse = {
  venta?: number;
};

/**
 * Devuelve la cotización USD -> ARS. Intenta traerla en vivo; si la
 * API no responde a tiempo o falla, se queda con `fallbackRate` sin
 * romper nada en pantalla.
 */
export function useArsRate(fallbackRate: number) {
  const [rate, setRate] = useState(fallbackRate);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    fetch(ENDPOINT, { signal: controller.signal })
      .then((res) => (res.ok ? (res.json() as Promise<DolarApiResponse>) : null))
      .then((data) => {
        if (data && typeof data.venta === "number" && data.venta > 0) {
          setRate(data.venta);
          setIsLive(true);
        }
      })
      .catch(() => {
        // Sin conexión o API caída: seguimos con la cotización de respaldo.
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return { rate, isLive, loading };
}
