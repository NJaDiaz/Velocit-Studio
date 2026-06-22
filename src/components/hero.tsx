import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DeployConsole } from "@/components/deploy-console";
import { buildWhatsAppLink } from "@/config/site";

const stats = [
  { value: "14 días", label: "tiempo promedio de entrega" },
  { value: "90+", label: "puntaje Lighthouse promedio" },
  { value: "100%", label: "código a medida, sin plantillas" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-paper-line bg-paper pt-14 pb-20 sm:pt-20 sm:pb-28"
    >

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Eyebrow>Velocit Studio — Desarrollo web &amp; apps</Eyebrow>

          <h1 className="mt-5 max-w-xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Sitios y aplicaciones web que cargan rápido y venden más.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist-700 sm:text-lg">
            Diseñamos y desarrollamos a medida: landing pages, sitios
            corporativos, tiendas online y plataformas propias. Sin
            plantillas genéricas, sin sitios lentos.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-royal-600 to-magenta-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal-600/25 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Ver planes y precios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-paper-line pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-mist-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DeployConsole />
        </div>
      </Container>
    </section>
  );
}
