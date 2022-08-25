import CalendarApplication from "./CalendarApplication.js";
import { data } from "./non-conflictiong-data.js";

const $body = document.querySelector("body");

const app = new CalendarApplication({ $parent: $body, data });
