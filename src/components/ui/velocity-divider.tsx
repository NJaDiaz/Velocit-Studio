import { cn } from "@/lib/utils";

/**
 * Firma visual de la marca: una línea de gradiente animada que recorre
 * cyan -> azul "royal" -> magenta, los tres colores exactos del
 * remolino del isotipo. Se usa como separador entre secciones en
 * lugar de un simple hairline, para mantener presente la identidad
 * de marca en toda la página.
 */
export function VelocityDivider({ className }: { className?: string }) {
  return (
    <div className={cn("w-full px-5 sm:px-8 lg:px-10", className)}>
      <div className="velocity-line mx-auto max-w-7xl rounded-full" />
    </div>
  );
}
