import * as React from "react";
import { site } from "@/lib/content";

export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`${site.name} logo`}
    >
      <defs>
        <linearGradient id="cd-badge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a0c0c" />
          <stop offset="1" stopColor="#2c0101" />
        </linearGradient>
        <linearGradient id="cd-gold" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#fbf0d4" />
          <stop offset="0.5" stopColor="#f3d58f" />
          <stop offset="1" stopColor="#d9a441" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        fill="url(#cd-badge)"
        stroke="rgba(243,213,143,0.45)"
        strokeWidth="1.2"
      />
      {/* C */}
      <path
        d="M25.4 18.5 A 8 8 0 1 0 25.4 29.5"
        fill="none"
        stroke="url(#cd-gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* D (stem + bowl) */}
      <path
        d="M28.5 16 V32 M28.5 16 A 8 8 0 0 1 28.5 32"
        fill="none"
        stroke="url(#cd-gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  size = 38,
  withWordmark = true,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {withWordmark && (
        <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight">
          <span style={{ color: "#f4e8cf" }}>Content</span>{" "}
          <span className="gold-text">Decoded</span>
        </span>
      )}
    </span>
  );
}
