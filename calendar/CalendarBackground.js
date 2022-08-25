import CalendarBackgroundItem from "./CalendarBackgroundItem.js";

class CalendarBackground {
  constructor({ $parent }) {
    this.$parent = $parent;

    this.$main = document.createElement("div");
    this.$main.classList.add("calendar-background");

    for (let i = 0; i < 24; i++) {
        new CalendarBackgroundItem({ $parent: this.$main })
    }

    this.$parent.appendChild(this.$main);
  }
}

export default CalendarBackground;
