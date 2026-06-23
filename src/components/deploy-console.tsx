"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Line = { text: string; tone?: "muted" | "ok" | "head" };

const SCRIPT: Line[] = [
  { text: "$ velocit deploy --project cliente-web", tone: "head" },
  { text: "→ Instalando dependencias…", tone: "muted" },
  { text: "→ Compilando y optimizando imágenes… ok", tone: "muted" },
  { text: "→ Generando reporte Lighthouse…", tone: "muted" },
  { text: "  Performance 99 · SEO 100 · Accesibilidad 100", tone: "ok" },
  { text: "✓ Deploy completo en 1.8s", tone: "ok" },
];

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export function DeployConsole() {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(0);

  const linesToShow = reduced ? SCRIPT.length : visible;

  useEffect(() => {
    if (reduced) return;

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      i += 1;
      setVisible(i);

      if (i < SCRIPT.length) {
        timeout = setTimeout(tick, i === 1 ? 500 : 650);
      } else {
        timeout = setTimeout(() => {
          setVisible(0);
          timeout = setTimeout(tick, 600);
        }, 2600);
      }
    };

    timeout = setTimeout(tick, 500);

    return () => clearTimeout(timeout);
  }, [reduced]);

  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-md overflow-hidden rounded-2xl border border-ink-line bg-ink shadow-2xl shadow-ink/30"
    >
      <div className="flex items-center gap-2 border-b border-ink-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-mist-700/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist-700/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-magenta-400/70" />
        <span className="ml-2 font-mono text-[11px] uppercase tracking-wide text-mist-500">
          velocit · build
        </span>
      </div>

      <div className="h-[220px] sm:h-[230px] px-5 py-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-hidden">
        <div className="flex flex-col gap-2">
          {SCRIPT.map((line, idx) => {
            const isVisible = idx < linesToShow;

            return (
              <p
                key={idx}
                className={`
                  whitespace-nowrap
                  overflow-hidden
                  text-ellipsis
                  transition-opacity
                  duration-300
                  ${
                    isVisible
                      ? "opacity-100"
                      : "opacity-0"
                  }
                  ${
                    line.tone === "head"
                      ? "text-paper"
                      : line.tone === "ok"
                        ? "text-cyan-400"
                        : "text-mist-500"
                  }
                `}
              >
                {line.text}
              </p>
            );
          })}

          <span className="inline-block h-4 w-2 bg-magenta-400 animate-blink" />
        </div>
      </div>

      <PerformanceGauge value={99} />
    </div>
  );
}

function PerformanceGauge({ value }: { value: number }) {
  const pct = Math.min(100, Math.max(0, value));
  const angle = (pct / 100) * 180;

  return (
    <div className="flex items-center justify-between gap-4 border-t border-ink-line px-5 py-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-mist-500">
          Lighthouse score
        </p>
        <p className="font-display text-2xl font-semibold text-paper">
          {pct}
        </p>
      </div>

      <svg viewBox="0 0 100 56" className="h-12 w-24" role="presentation">
        <path
          d="M6 50 A44 44 0 0 1 94 50"
          fill="none"
          stroke="#1F2C47"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M6 50 A44 44 0 0 1 94 50"
          fill="none"
          stroke="#1FD8E3"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${(angle / 180) * 138.2} 138.2`}
        />
      </svg>
    </div>
  );
}