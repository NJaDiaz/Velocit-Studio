"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2, MessageCircle, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import {
  buildWhatsAppLink,
  budgetOptions,
  projectTypeOptions,
  site,
} from "@/config/site";

const initialState: ContactFormState = { status: "idle" };

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section id="contacto" className="bg-paper py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Contanos tu proyecto.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-mist-700">
            Completá el formulario con el mayor detalle posible y te
            respondemos con una propuesta concreta en menos de 24 horas.
            Si preferís algo más directo, también podés escribirnos.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-royal-600"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper-dim">
                  <MessageCircle className="h-4 w-4" />
                </span>
                WhatsApp · respuesta inmediata
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-royal-600"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper-dim">
                  <Mail className="h-4 w-4" />
                </span>
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <Reveal>
          <form
            ref={formRef}
            action={formAction}
            className="rounded-2xl border border-paper-line bg-white p-6 sm:p-8"
          >
            {/* Honeypot anti-spam: invisible para personas, los bots
                suelen completar todos los campos que encuentran. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </Field>

              <Field label="Email" htmlFor="email" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </Field>

              <Field label="Teléfono" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Opcional"
                  className={inputClass}
                />
              </Field>

              <Field label="Tipo de proyecto" htmlFor="projectType">
                <select id="projectType" name="projectType" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Presupuesto aproximado" htmlFor="budget" className="sm:col-span-2">
                <select id="budget" name="budget" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Mensaje" htmlFor="message" required className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Contanos qué necesitás, para cuándo y cualquier referencia que tengas."
                  className={cn(inputClass, "resize-none")}
                />
              </Field>
            </div>

            <SubmitButton />

            {state.status === "success" && (
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-cyan-100 px-4 py-3 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                {state.message}
              </p>
            )}

            {state.status === "error" && (
              <div className="mt-4 rounded-xl bg-magenta-100 px-4 py-3 text-sm text-ink">
                <p className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-magenta-500" />
                  {state.message}
                </p>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 font-medium text-royal-600 hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Escribir por WhatsApp
                </a>
              </div>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-paper-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-mist-500 transition-colors focus:border-royal-600 focus:outline-none focus:ring-2 focus:ring-royal-600/15";

function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-mist-700">
        {label}
        {required && <span className="text-magenta-500"> *</span>}
      </label>
      {children}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-royal-600 to-magenta-500 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:-translate-y-0 sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Enviando…
        </>
      ) : (
        "Enviar mensaje"
      )}
    </button>
  );
}
