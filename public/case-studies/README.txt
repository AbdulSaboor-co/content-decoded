CONTENT DECODED — Case study images & videos
=============================================

Drop case-study screenshots or clips in THIS folder, then reference them from
lib/content.ts (the `caseStudies` array). Media is optional — leave it out and
the card shows just the result metric + text, as it does now.

Add an IMAGE (e.g. an analytics screenshot):
   - Put the file here, e.g.  lumea-analytics.png
   - In lib/content.ts:
       media: { type: "image", src: "/case-studies/lumea-analytics.png" }

Add a VIDEO (e.g. a results walkthrough or sample edit):
   - Put the file here, e.g.  lumea.mp4   (mp4 / H.264 recommended)
   - Optional thumbnail:      lumea.jpg
   - In lib/content.ts:
       media: { type: "video", src: "/case-studies/lumea.mp4", poster: "/case-studies/lumea.jpg" }

Tips
----
- Media renders at the top of the card in a 16:9 frame, so use landscape assets.
- Keep videos short and compressed for fast loading.
- Paths are served from the site root, so they start with "/case-studies/...".
