import CalendarBackground from "./CalendarBackground.js";
import CalendarItem from "./CalendarItem.js";

class CalendarVisualizer {
  constructor({ $parent }) {
    this.$parent = $parent;

    this.$main = document.createElement("div");
    this.$main.classList.add("calendar-visualizer");

    this.$background = new CalendarBackground({ $parent: this.$main });

    this.$parent.appendChild(this.$main);
    this.schedules = [];
  }

  /**
   *
   * @param {{
   *     startTime: string,
   *     endTime: string,
   *     color: string,
   *     title: string,
   * }} data
   */
  addSchedule = (data) => {
    const { color, startTime, endTime, title } = data;

    const schedule = new CalendarItem({
      $parent: this.$main,
      color,
      title,
      startTime,
      endTime,
    });

    this.schedules.push(schedule);
  };
}

export default CalendarVisualizer;
