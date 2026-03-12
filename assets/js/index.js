// Hover split effect
const containerEl = document.querySelector(".container");

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-left");
});

rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-right");
});

rightEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-right");
});


// Button click sound effect
const sound = new Audio("assets/sounds/click.mp3");

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    sound.play();
  });
});