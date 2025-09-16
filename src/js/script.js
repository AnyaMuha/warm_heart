import { Pagination } from "swiper/modules";
import "swiper/css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});

const heroSwiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  speed: 600,
  pagination: {
    el: ".plaid__pagination",
    clickable: true,
  },
  observer: true,
  observeParents: true,
});

// Меняем направление после 768px
const mq = window.matchMedia("(min-width: 768px)");
function applyDir() {
  heroSwiper.changeDirection(mq.matches ? "vertical" : "horizontal", true);
  heroSwiper.update();
}
mq.addEventListener
  ? mq.addEventListener("change", applyDir)
  : mq.addListener(applyDir);
applyDir();

// POPULAR
const popularSwiper = new Swiper(".popular__slider", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 16,
  pagination: {
    el: ".popular__pagination", // уникальная пагинация
    clickable: true,
  },
  navigation: {
    nextEl: ".right-open",
    prevEl: ".left-open",
  },
  breakpoints: {
    360: { slidesPerView: 1, spaceBetween: 15 },
    480: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1000: { slidesPerView: 3, spaceBetween: 20 },
    1920: { slidesPerView: 3, spaceBetween: 30 },
  },
});
