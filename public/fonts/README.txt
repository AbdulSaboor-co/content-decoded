CONTENT DECODED — Brand fonts
=============================

Drop your brand font files into THIS folder (public/fonts/) using the exact
names below. They will load automatically — no code changes needed.

Required (woff2 is best for the web; any one of these formats works):

  Beckman  ->  Beckman.woff2   (or .woff / .otf / .ttf)   [display / headings / logo]
  Quarzo   ->  Quarzo.woff2    (or .woff / .otf / .ttf)   [body text]

Tips
----
- Prefer .woff2 for the smallest size and fastest load. If you only have
  .otf or .ttf, you can convert them for free at https://transfonter.org
  (enable "woff2" output).
- If your fonts have multiple weights and you want them all, send the files
  and we can wire up per-weight @font-face rules in app/globals.css.

Until you add these files, the site uses premium fallbacks (Sora for display,
Manrope for body) so everything looks polished out of the box.
