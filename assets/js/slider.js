const sliderLeft = document.querySelector(".slider--left");
const sliderRight = document.querySelector(".slider--right");

sliderLeft.addEventListener("click", () => {
  sliderCards.scrollLeft -= 300;
});

sliderRight.addEventListener("click", () => {
  sliderCards.scrollLeft += 300;
});

let startX = 0;
let grab = false;

sliderCards.addEventListener("mousedown", function (e) {
  startX = e.clientX;
  grab = true;
});

sliderCards.addEventListener("mouseleave", function (e) {
  grab = false;
});

sliderCards.addEventListener("mousemove", function (e) {
  if (!grab) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});

window.addEventListener("mouseup", function (e) {
  grab = false;
});
