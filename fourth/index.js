gsap.from("#page-1 p", {
  y: -100,
  duration: 0.85,
  filter: "blur(20px)",
  stagger: 0.15,
});

gsap.to("#page-2 p", {
  transform: "translateX(-120%)",
  duration: 2,
  scrollTrigger: {
    trigger: "#page-2",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 4,
    pin: true,
  },
});
