GITHUB REPO.Link: https://github.com/charlesluis1724-a11y/Guitar-Rabbit-Web-Project.

PROJECT WEBSITE Link: https://charlesluis1724-a11y.github.io/Guitar-Rabbit-Web-Project./

FIGMA Link: https://www.figma.com/design/q0g8deI0kFGLe2oqwSwLTc/Untitled?node-id=0-1&p=f&t=1Gf3yJn77JSUkipr-0

Video Screen Record Link: (Parallax Effect might not work in Chrome, so I screen record it.) https://www.dropbox.com/scl/fi/5g6xh6zsfezbu9l1qsruk/Screen-Recording-2026-08-20-at-00.15.46.mov?rlkey=8eeze53cn6z9q448vnpnfz5ix&st=6noawa0a&dl=0

To be honest, haven't yet made the website completely responsive for mobile devices. I was truly distracted with recent life events and doing a fulltime job. I find it hard to catch up with the modules but I am still trying my best to finish the assessment. And I ask for your consideration as I slowly work with the modules. I will still continue to develop the responsiveness of the website as I’m just really short on time.

The Parallax Effect is only working in SAFARI as I’m mainly working on a Mac engine. I tried all resources but without luck I still didn't solve the why it's not working in CHROME. As part of working through the Modules I’ll will continue to work on finding ways to have it running in other browsers.

DOM manipulation for the Text_effect.js
 - This script does two things: splits text into per-character animated spans, then triggers a reveal animation when that text scrolls into view.
     * Lines 1–10: Split each .header3 element's text into individual letter-spans
     * Every other character gets an animation-delay proportional to its position (i * 0.05s) — so character 0 has no delay, character 1 delays 0.05s, character 2 delays             0.1s, etc.
     * All those spans get joined back together and replace the original text via innerHTML.
  
DOM manipulation for the Parallax_effect.js  
  - Registers the ScrollTrigger plugin with GSAP, and grabs the browser window's height (innerHeight) into a variable for later use.
    * Net effect: when you scroll into .zoom_in, the page pins again, and its h1 balloons up to 90x its size as you scroll through that section — creating a dramatic "zooming       into giant text" effect, tied to scroll position rather than time.

    * Together, these create two distinct pinned scroll sections: one where text scales up from nothing (zoom_out), and one where text scales up massively (zoom_in) — likely        used as a scroll-driven cinematic intro effect on your page.


