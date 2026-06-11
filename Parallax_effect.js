gsap.registerPlugin(ScrollTrigger);

const {innerHeight} = window;

gsap.from('.zoom_out h1', {
    scale: 0, stager: 0.25, duration: 10, scrollTrigger: {
        trigger: '.zoom_out',
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});

gsap.to('.zoom_in h1', {
    scale: 90, duration: 10, scrollTrigger: {
        trigger: '.zoom_in',
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 10
    }
});



