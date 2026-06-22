import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/config/site";

/** EJEMPLO — Reemplazar por testimonios reales de tus clientes. */
export function Testimonials() {
  return (
    <section className="bg-paper-dim py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Lo que dicen</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Clientes que ya están online.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={testimonial.name} delay={idx * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-paper-line bg-white p-7">
                <span className="font-display text-4xl leading-none text-magenta-400">
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-mist-700">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-paper-line pt-4">
                  <p className="font-display text-sm font-semibold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-mist-700">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
