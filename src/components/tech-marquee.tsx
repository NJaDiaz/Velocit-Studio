import { techStack } from "@/config/site";

export function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <div className="border-b border-paper-line bg-ink py-5">
      <div className="flex items-center gap-3 overflow-hidden">
        <span className="ml-5 shrink-0 rounded-full border border-ink-line px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-mist-500 sm:ml-8">
          Stack
        </span>
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
            {items.map((tech, idx) => (
              <span
                key={`${tech}-${idx}`}
                className="shrink-0 whitespace-nowrap font-display text-base text-mist-300/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
