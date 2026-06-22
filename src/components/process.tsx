import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/config/site";

export function Process() {
  return (
    <section id="proceso" className="bg-ink py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow dark>Cómo trabajamos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            De la idea a producción en dos semanas.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-300 sm:text-lg">
            Este es el cronograma real que usamos en un proyecto
            Profesional. Para proyectos a medida lo ajustamos en la
            primera llamada.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="velocity-line absolute left-0 top-[14px] hidden w-full lg:block" />

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {process.map((step, idx) => (
              <Reveal key={step.title} as="li" delay={idx * 0.08}>
                <div className="relative pl-6 lg:pl-0 lg:pt-9">
                  <span className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-magenta-400 bg-ink lg:left-0 lg:top-0" />
                  <span className="absolute left-[5px] top-1 h-full w-px bg-ink-line lg:hidden" />
                  <p className="font-mono text-xs uppercase tracking-wide text-magenta-400">
                    {step.time}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-300">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
