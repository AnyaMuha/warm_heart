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

const swiper = new Swiper(".mySwiper", {
  // по умолчанию (мобилка)
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

// переключение направления с 768px
const mq = window.matchMedia("(min-width: 768px)");
function applyDir() {
  const wantVertical = mq.matches;
  swiper.changeDirection(wantVertical ? "vertical" : "horizontal", true);
  swiper.update();
}
mq.addEventListener
  ? mq.addEventListener("change", applyDir)
  : mq.addListener(applyDir);
applyDir();
