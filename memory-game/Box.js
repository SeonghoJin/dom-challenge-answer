import { timer } from "./util.js";

class Box {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("box");
    this.$parent.appendChild(this.$main);
  }

  flicker = async (color) => {
    this.$main.style.backgroundColor = color;
    await timer(400);
    this.$main.style.backgroundColor = "#ffffff";
  };

  set backgroundColor(color) {
    this.$main.style.backgroundColor = color;
  }

  get current() {
    return this.$main;
  }
}

export default Box;
