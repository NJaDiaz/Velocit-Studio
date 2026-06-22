import { MapPin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { site } from "@/config/site";

const columns = [
  {
    title: "Estudio",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Trabajos", href: "#trabajos" },
    ],
  },
  {
    title: "Planes",
    links: [
      { label: "Planes y precios", href: "#planes" },
      { label: "Preguntas frecuentes", href: "#preguntas" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "GitHub", href: site.social.github },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <Container>
        <div className="grid gap-12 border-b border-ink-line pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-300">
              {site.description}
            </p>
            <ul className="mt-5 flex items-center gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wide text-mist-300 transition-colors hover:text-paper"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-wide text-mist-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-mist-300 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-mist-500">
              Contacto
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-mist-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-mist-500" />
                <a href={`mailto:${site.email}`} className="hover:text-paper">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-mist-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mist-500" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-mist-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <p className="font-mono">Hecho con Next.js · Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
