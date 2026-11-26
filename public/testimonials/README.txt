CONTENT DECODED — Testimonial photos & videos
==============================================

Drop client photos and video testimonials in THIS folder, then reference them
from lib/content.ts (the `testimonials` array). Both are optional — leave them
out and the card shows the gold initials + text quote as usual.

1) Add a client headshot (replaces the initials circle):
   - Put the file here, e.g.  maya.jpg
   - In lib/content.ts:
       avatar: "/testimonials/maya.jpg"

2) Add a VIDEO testimonial (plays inside the card):
   - Put the file here, e.g.  maya.mp4   (mp4 / H.264 recommended)
   - Optional thumbnail:      maya.jpg
   - In lib/content.ts:
       media: { type: "video", src: "/testimonials/maya.mp4", poster: "/testimonials/maya.jpg" }

3) Add an IMAGE testimonial (e.g. a screenshot of a DM / review):
   - Put the file here, e.g.  review-1.png
   - In lib/content.ts:
       media: { type: "image", src: "/testimonials/review-1.png" }

Tips
----
- Keep videos short and compressed (a 15–30s clip under ~10 MB loads fast).
- Square or 4:3 headshots crop best in the circular avatar.
- Anything in /public is served from the site root, so the path always starts
  with "/testimonials/...".
