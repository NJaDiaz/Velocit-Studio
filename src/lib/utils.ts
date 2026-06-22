type ClassValue = string | number | null | boolean | undefined;

/**
 * Combina clases de Tailwind, ignorando valores falsy.
 * Versión liviana sin dependencias externas (clsx/tailwind-merge).
 */
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}
