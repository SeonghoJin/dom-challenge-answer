class CalendarTime {
  constructor({ $parent, time }) {
    this.$parent = $parent;
    this.time = time;

    this.$main = document.createElement("div");
    this.$main.classList.add("calendar-time");

    if (this.time !== 0) {
      const viewTime = (() => {
        const time = this.time % 12;
        if (time !== 0) {
          return time;
        }

        return 12;
      })();

      const PMAM = Math.floor(this.time / 12) > 0 ? "PM" : "AM";
      this.$main.innerText = `${viewTime}:00 ${PMAM}`;
    }

    this.$parent.appendChild(this.$main);
  }
}

export default CalendarTime;
