import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function Line({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function Solid({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

/* ── Service icons ─────────────────────────────────────── */
export const Research = (p: IconProps) => (
  <Line {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m21 21-5.2-5.2" />
    <path d="M8.5 11.5v1.4M10.5 9.6v3.3M12.5 11v1.9" />
  </Line>
);
export const Idea = (p: IconProps) => (
  <Line {...p}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" />
  </Line>
);
export const Script = (p: IconProps) => (
  <Line {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </Line>
);
export const Edit = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m10 9 5 3-5 3z" />
  </Line>
);
export const Publish = (p: IconProps) => (
  <Line {...p}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4z" />
  </Line>
);
export const Manage = (p: IconProps) => (
  <Line {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Line>
);

/* ── Utility icons ─────────────────────────────────────── */
export const Check = (p: IconProps) => (
  <Line {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Line>
);
export const ArrowRight = (p: IconProps) => (
  <Line {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Line>
);
export const Star = (p: IconProps) => (
  <Solid {...p}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </Solid>
);
export const Sparkle = (p: IconProps) => (
  <Solid {...p}>
    <path d="M12 2c.45 5 1.55 6.1 6.5 6.5-4.95.4-6.05 1.5-6.5 6.5-.45-5-1.55-6.1-6.5-6.5C10.45 8.1 11.55 7 12 2Z" />
    <path d="M19 14c.2 2.2.8 2.8 3 3-2.2.2-2.8.8-3 3-.2-2.2-.8-2.8-3-3 2.2-.2 2.8-.8 3-3Z" />
  </Solid>
);
export const Calendar = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Line>
);
export const Mail = (p: IconProps) => (
  <Line {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Line>
);
export const Menu = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Line>
);
export const Close = (p: IconProps) => (
  <Line {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Line>
);
export const Plus = (p: IconProps) => (
  <Line {...p}>
    <path d="M12 5v14M5 12h14" />
  </Line>
);
export const Trending = (p: IconProps) => (
  <Line {...p}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M17 7h4v4" />
  </Line>
);

/* ── Social icons ──────────────────────────────────────── */
export const Instagram = (p: IconProps) => (
  <Line {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </Line>
);
export const Tiktok = (p: IconProps) => (
  <Line {...p}>
    <path d="M9.2 11.5a3.4 3.4 0 1 0 3.4 3.4V4.2c.7 2.5 2.6 3.8 5.2 4" />
  </Line>
);
export const Youtube = (p: IconProps) => (
  <Line {...p}>
    <rect x="2" y="5" width="20" height="14" rx="4.2" />
    <path d="m10 9 5 3-5 3z" />
  </Line>
);
export const Linkedin = (p: IconProps) => (
  <Line {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="4.2" />
    <circle cx="7" cy="8" r="1.05" fill="currentColor" stroke="none" />
    <path d="M7 11v6" />
    <path d="M11 17v-3.4a2.6 2.6 0 0 1 5.2 0V17" />
    <path d="M11 11v6" />
  </Line>
);
export const X = (p: IconProps) => (
  <Solid {...p}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
  </Solid>
);

/* ── String-keyed registry (used by data-driven sections) ─ */
export const icons: Record<string, (p: IconProps) => React.ReactElement> = {
  research: Research,
  idea: Idea,
  script: Script,
  edit: Edit,
  publish: Publish,
  manage: Manage,
  report: Trending,
  mail: Mail,
  instagram: Instagram,
  tiktok: Tiktok,
  youtube: Youtube,
  linkedin: Linkedin,
  x: X,
};
