import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em]",
        dark ? "text-mist-300" : "text-mist-700",
        className,
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-magenta-400" />

      {children}
    </span>
  );
}
