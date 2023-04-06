/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from "js-datepicker";

const allDate = document.querySelectorAll("[data-datepicker]");
const customMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
if (allDate.length > 0) {
  allDate.forEach((item) => {
    let value = null;
    const picker = datepicker(item, {
      customMonths: customMonth,
      startDay: 1,
      disabler: (date) => {
        return (
          date.getDay() === 2 || date.getDay() === 1 || date.getDay() === 3
        );
      },
      position: "tl",
      autoClose: true,
      minDate: new Date(),
      dateSelected: null,
      formatter: (input, date, instance) => {
        value = date.toLocaleDateString();
        input.value = value;
        const monthIndex = date.getMonth();
        const arrDate = value.split(".");
        const parent = item.closest(".datepicker");
        const day = parent.querySelector("[data-datepicker-day]");
        const monthWrap = parent.querySelector("[data-datepicker-month]");
        monthWrap.textContent = customMonth[monthIndex];
        day.textContent = arrDate[0];
        console.log(picker);
        picker.hide();
      },
    });
    flsModules.datepicker = picker;
  });
}
