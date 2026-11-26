# ✏️ Editing Guide — Content Decoded

A no-code, plain-English guide to changing the text, numbers, prices, photos and
videos on your site. **You do not need to be a developer.** Almost everything
lives in one file: **`lib/content.ts`**.

---

## The 3 things to know first

1. **Where the words live:** open `lib/content.ts` in any text editor
   (VS Code, Sublime, even TextEdit). You'll see your content written out in
   plain English. Change the text *between the quotation marks* and save.

2. **The one golden rule:** keep the `"quotes"`, `commas ,` and `{ }` brackets
   exactly where they are. You only ever change the words *inside* the quotes.
   ✅ `price: "$800"`  →  `price: "$900"`
   ❌ don't delete the quotes or the comma after it.

3. **See your changes:** start the site locally and it updates as you save:
   ```bash
   export PATH="$HOME/.local/node/bin:$PATH"
   cd content-decoded
   npm run dev
   ```
   Then open http://localhost:3000 in your browser.

> Tip: make a copy of `lib/content.ts` before big edits, so you can always undo.

---

## Quick map — what's where

| You want to change… | Open `lib/content.ts` and find… |
|---|---|
| Agency name, tagline, description | `site` |
| Email & Calendly link | `site` |
| Top menu labels | `nav` |
| Scrolling word strip (under the hero) | `marqueeItems` |
| The big stat numbers | `stats` |
| Services cards | `services` |
| Process steps | `processSteps` |
| Case studies (results cards) | `caseStudies` |
| Testimonials | `testimonials` |
| Short scrolling quotes | `shortQuotes` |
| Pricing / packages | `pricing` |
| FAQ | `faqs` |
| Social media links | `socials` |
| Photos & videos | `public/testimonials/` and `public/case-studies/` |
| Brand colours & fonts | `app/globals.css` |

---

## Section-by-section

### 1. Name, tagline, email, Calendly  → `site`
```ts
export const site = {
  name: "Content Decoded",
  tagline: "Content, decoded. Growth, delivered.",
  email: "contentdecoded.co@gmail.com",        // ← change your email here
  calendly: "https://calendly.com/contentdecoded-co/30min",  // ← your booking link
  ...
}
```
Change anything inside the quotes. The Calendly link is used by every
“Book a discovery call” button automatically.

### 2. The big numbers  → `stats`
```ts
export const stats = [
  { value: 18, suffix: "M+", label: "Organic views generated" },
  { value: 3.2, suffix: "x", decimals: 1, label: "Avg. engagement lift" },
];
```
- `value` = the number that counts up.
- `suffix` = what comes after it (`"M+"`, `"x"`, `"%"`, `"+"`).
- `decimals` = how many decimal places (use `decimals: 1` for `3.2`).
- `label` = the caption under the number.

### 3. Services cards  → `services`
```ts
{ icon: "research", title: "Research & Strategy", body: "We decode your niche…" },
```
Change `title` and `body`. (Leave `icon` alone unless you want a different one —
available icons: `research`, `script`, `edit`, `publish`, `manage`, `report`.)

### 4. Process steps  → `processSteps`
```ts
{ no: "01", title: "Research", body: "We audit your brand…" },
```
Change `title` and `body`. If you add or remove a step, renumber `no` (`"01"`, `"02"`, …).

### 5. Case studies (results cards)  → `caseStudies`
```ts
{
  tag: "DTC Skincare",
  result: "0 → 1.2M",
  metric: "views in 60 days",
  body: "Built a faceless short-form engine…",
  // media: { type: "image", src: "/case-studies/lumea.png" },   ← optional, see §9
}
```
- `tag` = the little label chip.
- `result` = the big gold number.
- `metric` = the small line under it.
- `body` = the description.

### 6. Testimonials  → `testimonials`
```ts
{
  quote: "Content Decoded didn't just make us videos…",
  name: "Maya Rao",
  role: "Founder, Lumea Skincare",
  initials: "MR",            // shown in the gold circle if there's no photo
  // avatar: "/testimonials/maya.jpg",   ← optional photo, see §9
  // media:  { type: "video", src: "/testimonials/maya.mp4" },  ← optional, see §9
}
```
To add a new testimonial, copy one whole `{ … },` block and edit it.

### 7. Pricing / packages  → `pricing`
```ts
{
  name: "Decode",
  kicker: "Starter",          // small label above the name ("Most popular" on the middle one)
  price: "$800",
  cadence: "/ month",
  blurb: "15 videos a month to build momentum…",
  featured: false,            // true = the highlighted middle card
  features: [
    "15 short-form videos / month",
    "7 sales-focused Instagram stories / month",
    "Research & strategy",
  ],
}
```
- Change `price`, `blurb`, and the `features` list (each feature is its own line in quotes).
- Only one package should have `featured: true`.

### 8. FAQ  → `faqs`
```ts
{ q: "How quickly can we get started?", a: "Most clients are onboarded within a week…" },
```
`q` = question, `a` = answer.

---

## 9. Adding photos & videos 📸🎥

Two folders hold your media. Each has its own README with the exact steps:
- **Testimonials:** `public/testimonials/`
- **Case studies:** `public/case-studies/`

**Steps:**
1. Drop your file into the folder (e.g. `maya.jpg` or `maya.mp4`).
2. In `lib/content.ts`, find that testimonial or case study and add the line:
   - Photo (testimonial avatar): `avatar: "/testimonials/maya.jpg",`
   - Video: `media: { type: "video", src: "/testimonials/maya.mp4", poster: "/testimonials/maya.jpg" },`
   - Image: `media: { type: "image", src: "/case-studies/result.png" },`
3. Remove the `//` at the start of the line to switch it on (the `//` means
   "ignore this line").

> The path always starts with `/` and matches the folder + file name exactly.
> If no media is set, the card just shows the text — nothing breaks.

---

## 10. Colours & fonts (optional)  → `app/globals.css`

Near the top you'll see your brand colours:
```css
--color-oxblood-700: #460202;   /* background */
--color-gold-300:    #f3d58f;   /* gold text / accents */
```
Change a hex code to recolour the whole site. Fonts (Beckman, Quarzo, Manrope)
live in `public/fonts/` — drop a replacement file with the same name to swap one.

---

## Publishing your changes

When you're happy locally, the site can be deployed for free on
[Vercel](https://vercel.com/new): connect this project's folder and it goes live
with a real URL. (Happy to set this up for you whenever you're ready.)

---

### If something looks broken
You almost certainly removed a `"`, `,` or `}` by accident. Undo your last change
(Ctrl/Cmd-Z) or restore your backup copy of `lib/content.ts`. That's the only
thing that can go wrong with text edits.
