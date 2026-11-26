import * as React from "react";
import { Logo } from "@/components/Logo";
import { icons, Mail } from "@/components/icons";
import { site, nav, socials } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gold-300/12 bg-oxblood-900/40">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo size={40} />
            <p className="muted mt-5 leading-relaxed">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-gold-200 transition-colors hover:text-gold-300"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300/70">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-gold-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300/70">
              Get started
            </h3>
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-script mt-4"
            >
              {site.ctaShort}
            </a>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => {
                const Icon = icons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-300/15 bg-oxblood-800/50 text-gold-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-300/45 hover:text-gold-300"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold-300/10 pt-6 text-sm muted sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Content, decoded. Growth, delivered.</p>
        </div>
      </div>
    </footer>
  );
}
