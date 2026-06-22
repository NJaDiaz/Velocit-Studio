import Image from "next/image";
import { cn } from "@/lib/utils";
import mark from "../../public/brand/velocit-mark.png";

export function Logo({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src={mark}
        alt="Velocit Studio"
        width={36}
        height={36}
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-bold uppercase tracking-tight sm:text-base",
            dark ? "text-paper" : "text-royal-600",
          )}
        >
          Velocit
        </span>
        <span
          className={cn(
            "font-display text-[9px] font-medium uppercase tracking-[0.3em] sm:text-[10px]",
            dark ? "text-mist-300" : "text-mist-500",
          )}
        >
          Studio
        </span>
      </span>
    </span>
  );
}
