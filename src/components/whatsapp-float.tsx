"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { buildWhatsAppLink, site } from "@/config/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 4C9.4 4 4 9.4 4 16.04c0 2.32.66 4.49 1.8 6.33L4 28l5.78-1.76a11.97 11.97 0 0 0 6.26 1.76C22.68 28.04 28 22.68 28 16.04 28 9.4 22.68 4 16.04 4Zm0 2.18c5.45 0 9.86 4.41 9.86 9.86 0 5.45-4.41 9.86-9.86 9.86a8.2 8.2 0 0 1-4.18-1.14l-.45-.27-3.45 1.05 1.06-3.34-.3-.47a9.74 9.74 0 0 1-1.5-5.69c0-5.45 4.42-9.86 9.82-9.86Zm-3.6 5.18c-.21 0-.55.08-.79.36-.24.27-.93.91-.93 2.2s.95 2.55 1.08 2.73c.13.18 1.79 2.86 4.45 3.9 2.21.87 2.66.7 3.14.66.48-.05 1.55-.63 1.77-1.25.21-.61.21-1.13.15-1.25-.06-.12-.24-.18-.51-.31-.27-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.6.13-.18.27-.69.85-.84 1.03-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.34-.79-.71-1.32-1.59-1.48-1.86-.15-.27-.02-.42.13-.56.15-.13.33-.36.49-.55.16-.18.21-.31.31-.51.1-.21.05-.4-.03-.55-.08-.15-.6-1.49-.82-2.01-.17-.41-.36-.45-.55-.45Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 700);
    const bubbleTimer = setTimeout(() => setShowBubble(true), 2400);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(bubbleTimer);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-500 sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {showBubble && (
        <div className="relative hidden max-w-[200px] rounded-2xl rounded-br-sm bg-white p-3.5 text-sm text-ink shadow-xl shadow-ink/15 ring-1 ring-paper-line sm:block">
          <button
            type="button"
            aria-label="Cerrar mensaje"
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink text-paper"
          >
            <X className="h-3 w-3" />
          </button>
          ¿Tenés un proyecto en mente? Escribinos, respondemos rápido. 👋
        </div>
      )}

      <div className="group relative">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escribir a ${site.name} por WhatsApp`}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40 motion-reduce:hidden" />
          <WhatsAppIcon className="relative h-7 w-7" />
        </a>
        <button
          type="button"
          aria-label="Ocultar botón de WhatsApp"
          onClick={() => setDismissed(true)}
          className="absolute -top-1.5 -left-1.5 hidden h-5 w-5 items-center justify-center rounded-full bg-ink text-paper opacity-0 transition-opacity group-hover:opacity-100 sm:flex"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
