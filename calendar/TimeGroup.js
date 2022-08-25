import CalendarTime from "./CalendarTime.js";

class TimeGroup {
  constructor({ $parent }) {
    this.$parent = $parent;

    this.$main = document.createElement("div");
    this.$main.classList.add("calendar-time-group");
    this.$times = [];
    for (let i = 0; i < 24; i++) {
      const time = new CalendarTime({ $parent: this.$main, time: i });
      this.$times.push(time);
    }

    this.$parent.appendChild(this.$main);
  }
}

export default TimeGroup;
