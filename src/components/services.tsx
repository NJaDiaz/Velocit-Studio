import {
  Building2,
  Rocket,
  ShoppingCart,
  LayoutDashboard,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/config/site";

const icons: LucideIcon[] = [
  Building2,
  Rocket,
  ShoppingCart,
  LayoutDashboard,
  Gauge,
  ShieldCheck,
];

export function Services() {
  return (
    <section id="servicios" className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Qué hacemos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Un equipo, todo lo que tu presencia digital necesita.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-700 sm:text-lg">
            Desde una landing para una campaña puntual hasta una
            plataforma propia con lógica de negocio compleja: definimos
            juntos el alcance justo para tu etapa.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Reveal key={service.title} delay={(idx % 3) * 0.08}>
                <article className="group h-full rounded-2xl border border-paper-line bg-white/60 p-7 transition-colors hover:border-royal-600/40 hover:bg-white">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper transition-colors group-hover:bg-royal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist-700">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-paper-dim px-3 py-1 font-mono text-[11px] text-mist-700"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
