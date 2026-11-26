import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { Star, ArrowRight, Calendar, Sparkle } from "@/components/icons";
import { site } from "@/lib/content";

const floatingChips = [
  { label: "Hooks that convert", className: "left-[3%] top-[26%]", delay: "0s" },
  { label: "Retention editing", className: "right-[4%] top-[20%]", delay: "1.2s" },
  { label: "Reels · Shorts · TikTok", className: "left-[7%] bottom-[20%]", delay: "0.6s" },
  { label: "Full-funnel strategy", className: "right-[6%] bottom-[24%]", delay: "1.8s" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Aurora glow */}
      <div
        className="orb animate-floatB left-1/2 top-[3rem] h-[20rem] w-[46rem] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(243,213,143,0.20), transparent 70%)" }}
      />
      <div
        className="orb animate-floatA left-1/2 top-[-6rem] h-[34rem] w-[34rem] -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(243,213,143,0.28), transparent 62%)" }}
      />
      <div
        className="orb animate-floatB left-[4%] top-[9rem] h-[24rem] w-[24rem]"
        style={{ background: "radial-gradient(circle, rgba(231,192,116,0.20), transparent 66%)" }}
      />
      <div
        className="orb animate-floatA right-[2%] top-[15rem] h-[22rem] w-[22rem]"
        style={{ background: "radial-gradient(circle, rgba(217,164,65,0.16), transparent 66%)" }}
      />

      {/* Floating chips (decorative, desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
        {floatingChips.map((chip) => (
          <span
            key={chip.label}
            className={`chip animate-drift absolute ${chip.className}`}
            style={{ animationDelay: chip.delay }}
          >
            <Sparkle className="h-3.5 w-3.5 text-gold-400" />
            {chip.label}
          </span>
        ))}
      </div>

      <div className="container-px relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="chip">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
            </span>
            Content marketing &amp; social media studio
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 text-[clamp(1.9rem,8.4vw,6.2rem)] font-bold leading-[1.04]">
            <span className="block whitespace-nowrap">
              Content, <span className="gold-script">decoded.</span>
            </span>
            <span className="block whitespace-nowrap">
              Growth, <span className="gold-script">delivered.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="muted mx-auto mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl">
            We research, script, edit and publish scroll-stopping short-form video that turns
            attention into customers — so your brand grows while you run the business.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-script w-full sm:w-auto"
            >
              <Calendar />
              {site.ctaLabel}
            </a>
            <a href="#results" className="btn btn-ghost w-full sm:w-auto">
              See the results
              <ArrowRight />
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <div className="flex items-center gap-1 text-gold-300" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm muted">
              <span className="font-semibold text-foreground">Trusted by 40+ founders &amp; brands</span>{" "}
              to grow on social.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex justify-center" aria-hidden="true">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold-300/30 p-1.5">
          <span className="scroll-cue-dot h-1.5 w-1.5 rounded-full bg-gold-300" />
        </div>
      </div>
    </section>
  );
}
