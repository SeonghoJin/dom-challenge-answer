import { getTopPosition } from "./util.js";

class CalendarItem {
  constructor({ $parent, color, title, startTime, endTime }) {
    this.$parent = $parent;
    this.color = color;
    this.title = title;

    this.$main = document.createElement("div");
    this.$main.classList.add("calendar-item");
    this.$main.style.backgroundColor = color;
    this.$main.innerText = `${title} \n ${this.formatTime(
      startTime
    )} - ${this.formatTime(endTime)}`;

    const startTopPosition = getTopPosition(startTime);
    const endTopPosition = getTopPosition(endTime);
    const height = endTopPosition - startTopPosition;

    this.resize({ top: startTopPosition, height });

    this.$parent.appendChild(this.$main);
  }

  resize = ({ top, height }) => {
    this.$main.style.top = `${top}px`;
    this.$main.style.height = `${height}px`;
    this.$main.style.width = "100%";
  };

  /**
   *
   * @param {string} time
   */
  formatTime = (time) => {
    const [hour] = time.split(":");
    const intHour = parseInt(hour);

    return `${time} ${intHour > 12 ? "pm" : "am"}`;
  };
}

export default CalendarItem;
