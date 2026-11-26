# Content Decoded — Landing Page

A dark, premium, conversion-focused landing page for **Content Decoded**, a content
marketing & social media studio. Built with **Next.js 16 + React 19 + Tailwind CSS v4**.

Tagline: _"Content, decoded. Growth, delivered."_

> 📝 **Want to edit the words, numbers, prices, photos or videos?**
> See **[EDITING.md](EDITING.md)** — a plain-English, no-code, step-by-step guide.

---

## Quick start

> **Node:** This project needs Node.js. It was installed for you at `~/.local/node`.
> Either add it to your PATH for this terminal:
> ```bash
> export PATH="$HOME/.local/node/bin:$PATH"
> ```
> (add that line to `~/.zshrc` to make it permanent), or use your own Node 18+.

```bash
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

---

## ✅ Things to do before launch (your "to fill in" list)

Everything below lives in **one file**: [`lib/content.ts`](lib/content.ts).

1. ~~**Calendly link**~~ ✅ wired to `https://calendly.com/contentdecoded-co/30min`.
2. **Email** — confirm `email` (currently `contentdecoded.co@gmail.com`).
3. **Social links** — fill in the `socials` `href`s (currently `#`).
4. **Pricing** — the three tiers in `pricing` are realistic drafts; edit names,
   prices and features to match your real packages.
5. **Testimonials & results** — swap the placeholder `testimonials`, `stats`,
   `caseStudies` and `shortQuotes` for your real numbers and quotes. Each testimonial
   can optionally include a client **photo** (`avatar`) and an **image or video**
   testimonial (`media`) — drop the files in [`public/testimonials/`](public/testimonials/)
   and reference them (see that folder's README). Cards fall back to initials + text
   when no media is set. Case-study (results) cards support the same optional `media`
   image/video — drop files in [`public/case-studies/`](public/case-studies/).

### Brand fonts ✅ installed
`Beckman` and `Quarzo` are installed in [`public/fonts/`](public/fonts/) (woff2 + ttf).
Type roles:
- **Beckman** (all-caps display) → headings & labels
- **Quarzo** (script) → gold accent on highlighted heading words (`.gold-script`)
- **Manrope** → body/UI text (clean, readable)

To swap a font later, drop a new `Beckman.woff2` / `Quarzo.woff2` into that folder.

---

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, <html>/<body>, grain overlay
  page.tsx          # assembles all sections in order
  globals.css       # design tokens (oxblood + gold), components, animations
  icon.svg          # CD monogram favicon
components/          # one file per section + Logo, Navbar, Reveal, Stat, icons
lib/content.ts      # ← ALL copy, prices, links, testimonials (edit here)
public/fonts/       # drop Beckman + Quarzo here
```

## Design system

- **Colors:** oxblood `#460202` (background) + gold `#f3d58f` (text/accent), with
  full tonal scales defined as Tailwind tokens (`oxblood-*`, `gold-*`) in `globals.css`.
- **Type:** Beckman (all-caps display) for headings, Quarzo (script) for gold accents,
  Manrope for body. Sora / Manrope are the fallbacks if a brand file is ever missing.
- **Motion:** lightweight, GPU-friendly CSS animations + IntersectionObserver scroll
  reveals (no animation libraries). Everything respects `prefers-reduced-motion`.
- **A11y:** semantic landmarks, skip link, visible focus rings, 44px+ touch targets,
  AA-contrast gold-on-oxblood, SVG icons (no emoji), keyboard-friendly nav.

## Deploy

Any Node host works. Easiest is [Vercel](https://vercel.com/new): push this folder to
a Git repo and import it — zero config needed.
