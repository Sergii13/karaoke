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
