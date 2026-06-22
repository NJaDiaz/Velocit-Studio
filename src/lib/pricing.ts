import type { Plan } from "@/config/site";

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const arsFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

/**
 * Formatea el precio de un plan en USD o, si `isArgentina` es true,
 * en pesos argentinos usando la cotización `arsRate` (cuántos ARS
 * vale 1 USD).
 */
export function formatPlanPrice(
  plan: Plan,
  isArgentina: boolean,
  arsRate: number,
) {
  const prefix = plan.priceFrom ? "Desde " : "";

  if (isArgentina) {
    const ars = Math.round((plan.priceUsd * arsRate) / 100) * 100;
    return `${prefix}${arsFormatter.format(ars)}`;
  }

  return `${prefix}${usdFormatter.format(plan.priceUsd)}`;
}
