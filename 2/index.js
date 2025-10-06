gsap.from("#page-1 .circle", {
  scale: 0,
  duration: 2,
});

gsap.from("#page-2 .circle", {
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page-2 .circle", //on what
    scroller: "body", //main container
    start: "top 50%", //element animation start point with meeting screen level
    end: "top 20%", //element animation end point with meeting screen level
    markers: true, //to make start-end point visible
    scrub: true, //to make animation like keyframe from start to end
  },
});
