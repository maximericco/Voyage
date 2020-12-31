const allItems = document.querySelectorAll("li");
const titre = document.querySelector("h1");
const span = document.querySelector("span");
const btn = document.querySelector("#buttonFirst");

const TL1 = new TimelineMax({ paused: true });

TL1.from(titre, 1, { y: -100, opacity: 0 }, 0.5)
  .from(span, 2, { y: -100, opacity: 0 }, 0.5)
  .from(btn, 1, { z: -200, opacity: 0 }, 2)
  .staggerFrom(allItems, 1, { y: -100, opacity: 0 }, 0.7, "-=1");

TL1.play();

const sr = ScrollReveal({
  duration: 1000,
  reset: true,
});

sr.reveal("p", {
  duration: 1000,
  delay: 500,
});

sr.reveal("", {
  duration: 1000,
  delay: 500,
});
