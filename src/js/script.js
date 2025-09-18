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

(function () {
  function initFooterAccordion() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const details = Array.from(
      footer.querySelectorAll(".footer__section details")
    );
    if (!details.length) return;

    const mqDesktop = window.matchMedia("(min-width: 768px)");

    // Применяем режим при загрузке/смене ширины
    function applyMode() {
      if (mqDesktop.matches) {
        // Десктоп — все открыты
        details.forEach((d) => (d.open = true));
      } else {
        // Мобилка — все закрыты (если хочешь оставить одну открытой — тут выставь .open у нужной)
        details.forEach((d) => (d.open = false));
      }
    }

    // Аккордеон на мобилке: закрываем соседей, когда одна раскрывается
    details.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (mqDesktop.matches) {
          // На десктопе не даём закрывать (держим открытым)
          if (!d.open) d.open = true;
          return;
        }
        if (d.open) {
          details.forEach((other) => {
            if (other !== d) other.open = false;
          });
        }
      });
    });

    applyMode();
    mqDesktop.addEventListener("change", applyMode);
  }

  // ждём DOM, если нужно
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFooterAccordion);
  } else {
    initFooterAccordion();
  }
})();
