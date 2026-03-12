const containerEl = document.querySelector(".container");

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

const storageText = document.getElementById("phoneStorage");

leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-left");
  storageText.innerText = "Apple Storage: 128GB / 256GB / 512GB";
});

leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-left");
  storageText.innerText = "Storage: --";
});

rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-right");
  storageText.innerText = "Samsung Storage: 256GB / 512GB / 1TB";
});

rightEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-right");
  storageText.innerText = "Storage: --";
});