import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { stats } from "@/lib/content";

/** Standalone proof strip — the headline numbers, no heading. */
export function Stats() {
  return (
    <section id="results" className="relative py-8 sm:py-10">
      <div className="container-px">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-10 rounded-3xl border border-gold-300/12 bg-oxblood-900/30 p-8 text-center sm:p-10 lg:grid-cols-4">
            {stats.map((s) => (
              <Stat
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                decimals={"decimals" in s ? s.decimals : 0}
                label={s.label}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
