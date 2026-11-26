import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { Calendar, Mail } from "@/components/icons";
import { site } from "@/lib/content";

export function FinalCta() {
  return (
    <section id="contact" className="section">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-300/20 bg-oxblood-800/40 px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Glow */}
            <div
              className="orb animate-pulse-glow left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2"
              style={{ background: "radial-gradient(circle, rgba(243,213,143,0.25), transparent 60%)" }}
            />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-[clamp(2.1rem,5vw,3.75rem)] font-bold">
                Ready to <span className="gold-script">decode your growth?</span>
              </h2>
              <p className="muted mx-auto mt-5 max-w-xl text-lg">
                Book a free 30-minute discovery call. We&apos;ll audit your content, share a few quick
                wins, and show you exactly how we&apos;d scale your brand on social.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-script w-full sm:w-auto"
                >
                  <Calendar />
                  {site.ctaLabel}
                </a>
                <a href={`mailto:${site.email}`} className="btn btn-ghost w-full sm:w-auto">
                  <Mail />
                  Email us instead
                </a>
              </div>
              <p className="muted mt-6 text-sm">No pressure, no obligation — just a clear plan.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
