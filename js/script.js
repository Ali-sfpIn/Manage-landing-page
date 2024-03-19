"use strict";
// SELECTIONS
const indicatorContainer = document.querySelector(".indicator-container");
const slides = document.querySelectorAll(".slide-item");
const indicators = document.querySelectorAll(".indicator");
const nav = document.querySelector("nav");
const menuToggle = document.querySelector(".menu-icon");
const hiddenMenu = document.querySelector(".hidden-menu");
const overlay = document.querySelector(".overlay");
const emailBtn = document.querySelector(".email-btn");
const emailInp = document.querySelector(".email-inp");
const emailErr = document.querySelector(".email-error-message");
// State variables
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// FUNCTIONS...
const slideHandler = function (slideNum) {
  slides.forEach((slide) => slide.classList.add("hidden"));
  const activeSlide = document.querySelector(`[slide-num="${slideNum}"]`);
  activeSlide.classList.remove("hidden");
};

// EVENT HANDLERS
window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth > 768)
    return slides.forEach((slide) => slide.classList.remove("hidden"));
  slideHandler(1);
});
("../images/empty-circle.svg");
indicatorContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.dataset.indNum) return;
  indicators.forEach((ind) => (ind.src = "../images/empty-circle.svg"));
  clicked.src = clicked.src = "../images/empty-circle.svg"
    ? "../images/circle.svg"
    : "../images/circle.svg";
  slideHandler(clicked.dataset.indNum);
});

menuToggle.addEventListener("click", function () {
  hiddenMenu.classList.toggle("-translate-y-60");
  overlay.classList.toggle("hidden");
  menuToggle.querySelector("img").src =
    menuToggle.querySelector("img").src ===
    "http://127.0.0.1:5500/images/menu-icon.svg"
      ? "http://127.0.0.1:5500/images/xMark.svg"
      : "http://127.0.0.1:5500/images/menu-icon.svg";
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  hiddenMenu.classList.add("-translate-y-48");
});

emailBtn.addEventListener("click", function () {
  if (!emailInp.value.match(emailRegex)) emailErr.classList.remove("hidden");
  if (emailInp.value.match(emailRegex)) emailErr.classList.add("hidden");
  emailInp.value = "";
});
