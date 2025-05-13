gsap.to("#page-2 img", {
  width: "95%",
  borderRadius: "50px",
  duration: 2,
  scrollTrigger: {
    trigger: "#page-2",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
