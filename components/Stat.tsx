"use client";

import * as React from "react";

type StatProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

/** Number that counts up from 0 the first time it scrolls into view. */
export function Stat({ value, suffix = "", prefix = "", decimals = 0, label }: StatProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const duration = 1600;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            setDisplay(value * eased);
            if (t < 1) raf = requestAnimationFrame(tick);
            else setDisplay(value);
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value]);

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref}>
      <div className="gold-text font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="muted mt-2 text-sm sm:text-base">{label}</div>
    </div>
  );
}
