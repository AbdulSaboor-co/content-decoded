"use client";

import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { Check, ArrowRight } from "@/components/icons";
import { pricing, site } from "@/lib/content";

export function Pricing() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const featuredRef = React.useRef<HTMLDivElement>(null);

  // On mobile the cards are a horizontal carousel — keep the featured
  // ("Most popular") card centered by default, including after a resize
  // (e.g. rotating a phone, or narrowing a desktop window into mobile).
  React.useEffect(() => {
    const center = () => {
      const track = trackRef.current;
      const card = featuredRef.current;
      if (!track || !card) return;
      // Only act when the cards are an actual horizontal carousel.
      if (track.scrollWidth > track.clientWidth + 4) {
        const delta =
          card.getBoundingClientRect().left -
          track.getBoundingClientRect().left -
          (track.clientWidth - card.clientWidth) / 2;
        track.scrollLeft += delta;
      }
    };
    const raf = requestAnimationFrame(center);
    window.addEventListener("resize", center);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", center);
    };
  }, []);

  return (
    <section id="pricing" className="section pt-6 sm:pt-10">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto justify-center">Packages</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-bold">
              Simple pricing. <span className="gold-script">Serious output.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="muted mt-5 text-lg">
              Every plan includes our full process — research, scripting, editing and uploading.
              The difference is how many videos and stories you ship each month.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Mobile: swipeable carousel · Large screens: 3-up grid */}
      <div
        ref={trackRef}
        className="no-scrollbar carousel-fade mt-8 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-[calc((100vw-min(82vw,340px))/2)] pt-6 pb-14 lg:mx-auto lg:mt-14 lg:max-w-[76rem] lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-x-visible lg:px-8 lg:pt-0 lg:pb-0"
      >
        {pricing.map((tier) => (
          <div
            key={tier.name}
            ref={tier.featured ? featuredRef : undefined}
            className="w-[min(82vw,340px)] flex-none snap-center lg:w-auto"
          >
            <article
              className={`card relative flex h-full flex-col p-7 sm:p-8 ${
                tier.featured
                  ? "border-gold-300/45 bg-oxblood-700/40 shadow-[0_30px_70px_-30px_rgba(243,213,143,0.35)] lg:-translate-y-3"
                  : ""
              }`}
            >
              {tier.featured ? (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-oxblood-900"
                  style={{ background: "linear-gradient(180deg,#f8e6b8,#d9a441)" }}
                >
                  {tier.kicker}
                </span>
              ) : (
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-300/70">
                  {tier.kicker}
                </span>
              )}

              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{tier.name}</h3>
              <p className="muted mt-2 min-h-[2.75rem] text-sm leading-relaxed">{tier.blurb}</p>

              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-bold gold-text">{tier.price}</span>
                {tier.cadence && <span className="muted pb-1 text-sm">{tier.cadence}</span>}
              </div>

              <div className="my-6 hairline" />

              <ul className="flex-1 space-y-3.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-300/15 text-gold-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-script mt-8 w-full ${tier.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {site.ctaLabel}
                <ArrowRight />
              </a>
            </article>
          </div>
        ))}
      </div>

      <div className="container-px">
        <p className="muted mt-8 text-center text-sm">
          Month-to-month after an initial 3-month sprint. Need something custom?{" "}
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-300 underline-offset-4 hover:underline"
          >
            Let&apos;s talk.
          </a>
        </p>
      </div>
    </section>
  );
}
