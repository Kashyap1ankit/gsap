const tl = gsap.timeline();
tl.from("nav p", {
  y: -50,
  duration: 0.5,
});

tl.from("main h1", {
  x: -50,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
  filter: "blur(20px)",
});

tl.from("main img", {
  x: 50,
  duration: 0.5,
  opacity: 0,
  filter: "blur(10px)",
  rotate: -45,
  stagger: 0.5,
});
