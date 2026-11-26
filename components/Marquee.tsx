import * as React from "react";
import { marqueeItems } from "@/lib/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative border-y border-gold-300/10 bg-oxblood-900/30 py-5">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-medium text-gold-200/70"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400/50" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
