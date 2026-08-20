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


