import CalendarApplication from "./CalendarApplication.js";
import { data as nonConflictingData } from "./non-conflictiong-data.js";
import { data as conflictingData } from "./conflicting-data.js";

const $body = document.querySelector("body");

const firstApp = new CalendarApplication({
  $parent: $body,
  data: nonConflictingData,
});

const secondApp = new CalendarApplication({
  $parent: $body,
  data: conflictingData,
});
