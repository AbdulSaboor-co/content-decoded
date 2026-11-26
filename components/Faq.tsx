import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { Plus } from "@/components/icons";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">FAQ</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-bold">
                Questions, <span className="gold-script">answered.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="muted mt-5 text-lg">
                Still unsure? Book a quick call and we&apos;ll map out exactly what growth could look
                like for your brand.
              </p>
            </Reveal>
          </div>

          <div>
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="faq" name="faq">
                  <summary>
                    {item.q}
                    <Plus className="faq-plus h-5 w-5" />
                  </summary>
                  <p className="faq-body leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
