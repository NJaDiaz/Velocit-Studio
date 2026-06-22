"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { useArsRate } from "@/hooks/use-ars-rate";
import { formatPlanPrice } from "@/lib/pricing";
import {
  buildWhatsAppLink,
  maintenancePlans,
  pricingConfig,
  plans,
  type Plan,
} from "@/config/site";

export function Pricing() {
  // Por defecto mostramos pesos: la mayoría de quienes visitan el
  // sitio son de Argentina. Quien no lo sea puede pasar a USD con el switch.
  const [isArgentina, setIsArgentina] = useState(true);
  const { rate, isLive } = useArsRate(pricingConfig.fallbackUsdToArs);

  return (
    <section id="planes" className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-2xl">
            <Eyebrow>Planes y precios</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Precios claros, sin sorpresas.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist-700 sm:text-lg">
              Elegí el punto de partida. Si tu proyecto no entra en ninguna
              caja, lo armamos a medida — hablamos por WhatsApp y te
              cotizamos sin cargo.
            </p>
          </div>

          <CurrencySwitch
            isArgentina={isArgentina}
            onChange={setIsArgentina}
            rate={rate}
            isLive={isLive}
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 0.08} className="h-full">
              <PlanCard plan={plan} isArgentina={isArgentina} arsRate={rate} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-paper-line bg-white/60 p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <Eyebrow>Después del lanzamiento</Eyebrow>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                Planes de mantenimiento mensual
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-mist-700">
                Para que tu sitio siga rápido, seguro y actualizado sin
                que tengas que pensar en eso.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "rounded-xl border p-6",
                  plan.highlighted
                    ? "border-royal-600/40 bg-royal-50"
                    : "border-paper-line bg-paper",
                )}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-display text-base font-semibold text-ink">
                    {plan.name}
                  </h4>
                  <p className="font-display text-xl font-semibold text-ink whitespace-nowrap">
                    {formatPlanPrice(plan, isArgentina, rate)}
                    <span className="ml-1 text-xs font-normal text-mist-700">
                      {plan.priceNote}
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-sm text-mist-700">{plan.description}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-mist-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CurrencySwitch({
  isArgentina,
  onChange,
  rate,
  isLive,
}: {
  isArgentina: boolean;
  onChange: (value: boolean) => void;
  rate: number;
  isLive: boolean;
}) {
  return (
    <div className="rounded-2xl border border-paper-line bg-white px-5 py-4 sm:min-w-[280px]">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-ink">
          {isArgentina ? "🇦🇷 Precios en pesos" : "Precios en dólares"}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={isArgentina}
          aria-label="Mostrar precios en pesos argentinos"
          onClick={() => onChange(!isArgentina)}
          className={cn(
            "relative h-7 w-12 shrink-0 rounded-full transition-colors",
            isArgentina ? "bg-royal-600" : "bg-mist-300",
          )}
        >
          <span
            className={cn(
              "absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform",
              isArgentina && "translate-x-5",
            )}
          />
        </button>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-mist-500">
        {isArgentina ? (
          <>
            Mercado Pago, transferencia o tarjeta.{" "}
            {isLive ? (
              <span className="text-royal-600">
                Dólar blue: ${rate.toLocaleString("es-AR")}
              </span>
            ) : (
              <>Cotización referencial: ${rate.toLocaleString("es-AR")}</>
            )}
          </>
        ) : (
          "Transferencia internacional o tarjeta."
        )}
      </p>
    </div>
  );
}

function PlanCard({
  plan,
  isArgentina,
  arsRate,
}: {
  plan: Plan;
  isArgentina: boolean;
  arsRate: number;
}) {
  const displayPrice = formatPlanPrice(plan, isArgentina, arsRate);
  const currencyLabel = isArgentina ? "ARS" : "USD";

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-7 sm:p-8",
        plan.highlighted
          ? "border-ink bg-ink text-paper shadow-2xl shadow-ink/20 lg:-translate-y-3"
          : "border-paper-line bg-white",
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 right-7 rounded-full bg-magenta-400 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-white">
          Más elegido
        </span>
      )}

      <h3
        className={cn(
          "font-display text-xl font-semibold",
          plan.highlighted ? "text-paper" : "text-ink",
        )}
      >
        {plan.name}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          plan.highlighted ? "text-mist-300" : "text-mist-700",
        )}
      >
        {plan.description}
      </p>

      <div className="mt-6 flex flex-wrap items-baseline gap-2">
        <span className="font-display text-3xl font-semibold sm:text-4xl">
          {displayPrice}
        </span>
        <span
          className={cn(
            "text-sm",
            plan.highlighted ? "text-mist-300" : "text-mist-700",
          )}
        >
          {plan.priceNote}
        </span>
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                plan.highlighted ? "text-cyan-400" : "text-royal-600",
              )}
            />
            <span className={plan.highlighted ? "text-mist-200" : "text-mist-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(
          `¡Hola! Quiero cotizar el plan ${plan.name} (${displayPrice} ${currencyLabel}).`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5",
          plan.highlighted
            ? "bg-gradient-to-r from-cyan-500 via-royal-600 to-magenta-500 text-white"
            : "bg-ink text-paper hover:bg-royal-600",
        )}
      >
        <MessageCircle className="h-4 w-4" />
        {plan.ctaLabel}
      </a>
    </div>
  );
}
