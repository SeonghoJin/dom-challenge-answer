import TimeGroup from "./TimeGroup.js";
import CalendarVisualizer from "./CalendarVisualizer.js";

class CalendarApplication {
  constructor({ $parent, data }) {
    this.$parent = $parent;
    this.data = data;

    this.$main = document.createElement("div");
    this.$main.classList.add("calendar");

    this.$parent.appendChild(this.$main);

    this.$timeGroup = new TimeGroup({ $parent: this.$main });
    this.$calendarVisualizer = new CalendarVisualizer({ $parent: this.$main });

    data.forEach((schedule) => {
      this.$calendarVisualizer.addSchedule(schedule);
    });
  }
}

export default CalendarApplication;
