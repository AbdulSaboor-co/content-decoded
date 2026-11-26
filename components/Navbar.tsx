"use client";

import * as React from "react";
import { Logo } from "@/components/Logo";
import { Menu, Close, Calendar } from "@/components/icons";
import { site, nav } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-[76rem] items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-x-3 top-2 bottom-2 -z-10 rounded-2xl transition-all duration-300 sm:inset-x-6 ${
            scrolled
              ? "border border-gold-300/15 bg-oxblood-900/70 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        />

        <a href="#top" className="flex items-center" aria-label={`${site.name} home`}>
          <Logo size={38} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-gold-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-script hidden sm:inline-flex"
          >
            <Calendar />
            {site.ctaShort}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold-300/20 bg-oxblood-800/60 text-gold-200 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`mx-4 overflow-hidden rounded-2xl border border-gold-300/15 bg-oxblood-900/95 backdrop-blur-xl transition-all duration-300 ${
            open ? "mt-1 max-h-[26rem] opacity-100" : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="flex flex-col p-3" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground/85 transition-colors hover:bg-gold-300/10 hover:text-gold-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-script mt-2"
            >
              <Calendar />
              {site.ctaLabel}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
