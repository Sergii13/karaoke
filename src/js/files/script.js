// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import { gotoBlock } from "./scroll/gotoblock.js";

window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const header = document.querySelector("header");
  setPaddingWrapper(header, wrapper);
  window.addEventListener("resize", () => {
    console.log("sasa");
    setPaddingWrapper(header, wrapper);
  });
});

function setPaddingWrapper(header, wrapper) {
  const headerHeight = header.offsetHeight;
  wrapper.style.paddingTop = headerHeight + "px";
}

const btnDown = document.querySelector(".main-block__scroll");
const sections = document.querySelectorAll("section");

if (btnDown) {
  if (sections.length < 2) {
    btnDown.style.display = "none";
  } else {
    btnDown.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(sections[1]);
      gotoBlock(sections[1], true, 500, 0);
    });
  }
}
const customInput = document.querySelector("[data-custom]");
if (customInput) {
  customInput.addEventListener("focus", () => {
    customInput.parentElement.querySelector("input[type=radio]").checked = true;
    console.log("");
  });
}
let input = document.querySelector("[data-custom]");

// Додаємо подію "keydown" до інпут-елемента
if (input) {
  input.addEventListener("keydown", function (event) {
    // Перевіряємо, чи код натиснутої клавіші є кодом цифри
    if (
      (event.keyCode < 48 || event.keyCode > 57) && // 0-9 (основні цифри)
      (event.keyCode < 96 || event.keyCode > 105) && // 0-9 (цифрова клавіатура)
      event.keyCode !== 8 && // Backspace
      event.keyCode !== 9 && // Tab
      event.keyCode !== 37 && // Left arrow
      event.keyCode !== 39 && // Right arrow
      event.keyCode !== 46 // Delete
    ) {
      event.preventDefault(); // Блокуємо введення некоректних символів
    }
  });
}
