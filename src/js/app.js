import "../scss/style.scss";
import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();
flsFunctions.menuInit();
flsFunctions.spollers();
import * as flsForms from "./files/forms/forms.js";

flsForms.formFieldsInit({
  viewPass: false,
  autoHeight: false,
});
flsForms.formSubmit();
flsForms.formQuantity();
import "./libs/select.js";
import "./files/forms/datepicker.js";
import "./files/sliders.js";
import * as flsScroll from "./files/scroll/scroll.js";

flsScroll.pageNavigation();
flsScroll.headerScroll();
import "./files/script.js";
