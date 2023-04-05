// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

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
