"use client";

import * as React from "react";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Stagger delay in milliseconds */
  delay?: number;
};

/**
 * Fades + lifts children into view when scrolled into the viewport.
 * Uses a single IntersectionObserver per element and unobserves after
 * firing once. Falls back to instantly visible for reduced-motion users.
 */
export function Reveal({ children, className = "", delay = 0, style, ...rest }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
