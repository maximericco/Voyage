const allItems = document.querySelectorAll("li");
const titre = document.querySelector("h1");
const span = document.querySelector("span");
const buttonFirst = document.querySelector("#buttonFirst");

const TL1 = new TimelineMax({ paused: true });

TL1.from(titre, 1, { y: -100, opacity: 0 }, 0.5)
  .from(span, 2, { y: -100, opacity: 0 }, 0.5)
  .from(buttonFirst, 1, { z: -200, opacity: 0 }, 2)
  .staggerFrom(allItems, 1, { y: -100, opacity: 0 }, 0.7, "-=1");

TL1.play();

const sr = ScrollReveal({
  duration: 1000,
  reset: false,
});

sr.reveal("p", {
  duration: 1000,
  delay: 1000,
});

sr.reveal(".photo", {
  duration: 1000,
  delay: 1000,
});

sr.reveal(".btn", {
  duration: 1000,
  delay: 1000,
});
