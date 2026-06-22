import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
/**
 * EJEMPLO — Reemplazar por proyectos reales.
 * Cada item es un mockup abstracto (sin capturas reales) que representa
 * un tipo de proyecto. Cuando tengas tus primeros trabajos, cambiá
 * `screen` por una imagen real con <Image /> de next/image.
 */
const projects = [
  {
    category: "Landing Page",
    name: "Constructora HomeViviendas",
    description:
      "Pagina web de constructora con galería, formulario de contacto, muestra de proyectos y tipologías.",
    image: "/demos/demo1.jpeg",
    demoUrl: "https://homeviviendas.vercel.app/",
  },
  {
    category: "Plataforma Web",
    name: "Estudio de Pilates",
    description:
      "Plataforma web para gestión de clases de pilates. Incluye reservas online, control de cupos y panel administrativo.",
    image: "/demos/demo2.jpeg",
    demoUrl: "https://web-pilates.vercel.app/",
  },
  {
    category: "SAAS Dashboard",
    name: "Sitio Corporativo FlowMetrics",
    description:
      "Dashboard SaaS de analítica para agencias. Reportes en tiempo real y exportación PDF0.",
    image: "/demos/demo3.jpeg",
    demoUrl: null,
  },
];

export function Showcase() {
  return (
    <section id="trabajos" className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Trabajos</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Resultados, no solo diseño.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mist-700">
           Podes pedir más proyectos con métricas
            completas por WhatsApp, estas son solo demostraciones de proyectos, varian al terminarla.
          </p>
        </div>

         <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.08}>
              <article className="group overflow-hidden rounded-3xl border border-paper-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {project.demoUrl
                        ? "Demo interactiva"
                        : "Vista previa"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-mist-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-mist-700">
                    {project.description}
                  </p>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-xl bg-ink text-paper hover:bg-royal-600 px-4 py-2 text-sm font-medium"
                    >
                      Ver demo
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex items-center rounded-xl border border-paper-line px-4 py-2 text-sm text-mist-500">
                      Próximamente
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
