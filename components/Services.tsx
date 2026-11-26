import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { icons } from "@/components/icons";
import { steps } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="section pb-6 sm:pb-10">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mx-auto justify-center">What we do</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-bold">
              From first idea to <span className="gold-script">final upload.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="muted mt-5 text-lg">
              One team runs your entire content engine — four simple steps, handled end to end.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal key={step.title} delay={(i % 4) * 80}>
                <article className="card group flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile transition-transform duration-300 group-hover:scale-105">
                      {Icon ? <Icon /> : null}
                    </span>
                    <span className="font-display text-4xl font-bold leading-none text-gold-300/20">
                      {step.no}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="muted mt-3 leading-relaxed">{step.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
