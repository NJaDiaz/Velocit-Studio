"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { faqs } from "@/config/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-paper py-24 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Antes de escribirnos, esto te puede servir.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mist-700">
            ¿No está tu duda? Escribinos por WhatsApp y te respondemos
            directamente, sin formularios largos.
          </p>
        </div>

        <ul className="divide-y divide-paper-line border-y border-paper-line">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <Reveal key={faq.question} as="li" delay={idx * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-ink sm:text-lg">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-mist-500 transition-transform duration-300",
                      isOpen && "rotate-45 text-magenta-400",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                  style={{ overflow: "hidden" }}
                >
                  <p className="min-h-0 pb-5 pr-8 text-sm leading-relaxed text-mist-700">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
