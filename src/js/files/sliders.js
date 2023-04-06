/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation } from "swiper";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
//import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import "swiper/css";

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  const allFilter = document.querySelectorAll(".item-booking__slider");
  if (allFilter.length > 0) {
    allFilter.forEach((item) => {
      new Swiper(item, {
        // Вказуємо склас потрібного слайдера
        // Підключаємо модулі слайдера
        // для конкретного випадку
        modules: [Navigation],
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 14,
        speed: 800,
        freeMode: true,
        navigation: {
          prevEl: item
            .closest(".item-booking")
            .querySelector(".item-booking__arrow.prev"),
          nextEl: item
            .closest(".item-booking")
            .querySelector(".item-booking__arrow.next"),
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 9,
          },
          600: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
          1200: {
            slidesPerView: 5,
          },
        },
        on: {},
      });
    });
  }
  if (document.querySelector(".swiper")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".swiper2", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
                                                                                                                                                                                                                                                                                                                                                                                    // Ефекти
                                                                                                                                                                                                                                                                                                                                                                                    effect: 'fade',
                                                                                                                                                                                                                                                                                                                                                                                    autoplay: {
                                                                                                                                                                                                                                                                                                                                                                                        delay: 3000,
                                                                                                                                                                                                                                                                                                                                                                                        disableOnInteraction: false,
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */

      // Пагінація
      /*
                                                                                                                                                                                                                                                                                                                                                                                    pagination: {
                                                                                                                                                                                                                                                                                                                                                                                        el: '.swiper-pagination',
                                                                                                                                                                                                                                                                                                                                                                                        clickable: true,
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */

      // Скроллбар
      /*
                                                                                                                                                                                                                                                                                                                                                                                    scrollbar: {
                                                                                                                                                                                                                                                                                                                                                                                        el: '.swiper-scrollbar',
                                                                                                                                                                                                                                                                                                                                                                                        draggable: true,
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
                                                                                                                                                                                                                                                                                                                                                                                    // Брейкпоінти
                                                                                                                                                                                                                                                                                                                                                                                    breakpoints: {
                                                                                                                                                                                                                                                                                                                                                                                        640: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 1,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 0,
                                                                                                                                                                                                                                                                                                                                                                                            autoHeight: true,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                        768: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 2,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                        992: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 3,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                        1268: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 4,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 30,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */
      // Події
      on: {},
    });
  }
  if (document.querySelector(".us__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".us__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      speed: 800,
      loop: true,
      normalizeSlideIndex: true,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
                                                                                                                                                                                                                                                                                                                                                                                    // Ефекти
                                                                                                                                                                                                                                                                                                                                                                                    effect: 'fade',
                                                                                                                                                                                                                                                                                                                                                                                    autoplay: {
                                                                                                                                                                                                                                                                                                                                                                                        delay: 3000,
                                                                                                                                                                                                                                                                                                                                                                                        disableOnInteraction: false,
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */

      // Пагінація
      /*
                                                                                                                                                                                                                                                                                                                                                                                    pagination: {
                                                                                                                                                                                                                                                                                                                                                                                        el: '.swiper-pagination',
                                                                                                                                                                                                                                                                                                                                                                                        clickable: true,
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */

      // Скроллбар
      /*
                                                                                                                                                                                                                                                                                                                                                                                    scrollbar: {
                                                                                                                                                                                                                                                                                                                                                                                        el: '.swiper-scrollbar',
                                                                                                                                                                                                                                                                                                                                                                                        draggable: true,
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".us__arrow.prev",
        nextEl: ".us__arrow.next",
      },
      /*
                                                                                                                                                                                                                                                                                                                                                                                    // Брейкпоінти
                                                                                                                                                                                                                                                                                                                                                                                    breakpoints: {
                                                                                                                                                                                                                                                                                                                                                                                        640: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 1,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 0,
                                                                                                                                                                                                                                                                                                                                                                                            autoHeight: true,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                        768: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 2,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                        992: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 3,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 20,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                        1268: {
                                                                                                                                                                                                                                                                                                                                                                                            slidesPerView: 4,
                                                                                                                                                                                                                                                                                                                                                                                            spaceBetween: 30,
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    */
      // Події
      on: {},
    });
  }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
var init = false;

function swiperRoom() {
  let swiper = null;
  if (window.innerWidth <= 991) {
    if (!init) {
      if (document.querySelector(".room__slider")) init = true;
      swiper = new Swiper(".room__slider", {
        modules: [Navigation],
        observer: true,
        observeParents: true,
        slidesPerView: 2,
        speed: 800,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
        },
      });
    }
  } else if (init) {
    swiper.destroy(true, true);
    init = false;
  }
}

swiperRoom();
window.addEventListener("resize", swiperRoom);
