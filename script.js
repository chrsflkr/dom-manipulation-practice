// Wrap every letter in a span
const textWrapper = document.querySelector('.tittle-animation .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.tittle-animation .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.tittle-animation',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });