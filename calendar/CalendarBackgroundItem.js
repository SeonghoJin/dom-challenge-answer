class CalendarBackgroundItem {
  constructor({ $parent }) {
    this.$parent = $parent;

    this.$main = document.createElement("div");
    this.$main.classList.add("calendar-background-item");
    this.$main.classList.add("border-bottom");

    this.$parent.appendChild(this.$main);
  }
}

export default CalendarBackgroundItem;
