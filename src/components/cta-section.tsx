import { MessageCircle, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buildWhatsAppLink, site } from "@/config/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1F2C47 1px, transparent 1px), linear-gradient(to bottom, #1F2C47 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <Container className="relative flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          ¿Arrancamos con tu proyecto esta semana?
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-mist-300">
          Contanos qué necesitás y te respondemos con una propuesta
          concreta en menos de 24 horas.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-royal-600 to-magenta-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-royal-600/25 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Escribinos por WhatsApp
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
