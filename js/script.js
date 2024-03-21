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
const menuIcon = document.getElementById("menu-icon");
// State variables
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// FUNCTIONS...
const slideHandler = function (slideNum) {
  slides.forEach((slide) => slide.classList.add("hidden"));
  const activeSlide = document.querySelector(`[slide-num="${slideNum}"]`);
  activeSlide.classList.remove("hidden");
};

const toggler = function (state) {
  hiddenMenu.classList.toggle("-translate-y-60");

  if (menuIcon.src === "images/menu-icon.svg")
    menuIcon.src = "images/xMark.svg";
  else menuIcon.src = "images/menu-icon.svg";

  if (state) return overlay.classList.toggle("hidden");

  overlay.classList.toggle("hidden");
};

// EVENT HANDLERS
window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth > 768)
    return slides.forEach((slide) => slide.classList.remove("hidden"));
  slideHandler(1);
});

console.log(indicatorContainer);
indicatorContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.dataset.indNum) return;
  indicators.forEach((ind) => (ind.src = "images/empty-circle.svg"));
  clicked.src = clicked.src = "images/empty-circle.svg"
    ? "images/circle.svg"
    : "images/circle.svg";
  slideHandler(clicked.dataset.indNum);
});

menuToggle.addEventListener("click", () => toggler());

overlay.addEventListener("click", () => toggler(true));

emailBtn.addEventListener("click", function () {
  if (!emailInp.value.match(emailRegex)) emailErr.classList.remove("hidden");
  if (emailInp.value.match(emailRegex)) emailErr.classList.add("hidden");
  emailInp.value = "";
});
