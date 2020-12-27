const titre = document.querySelector("h1");
const txt = document.querySelector("div");
const allItems = document.querySelectorAll("li");

const TL1 = new TimelineMax({ paused: true });

TL1.from(titre, 1, { y: -50, opacity: 0 })
  .from(txt, 1, { opacity: 0 }, "-=0.4")
  .staggerFrom(allItems, 1, { y: -50, opacity: 0 }, 0.2, "-=1");

TL1.play();
