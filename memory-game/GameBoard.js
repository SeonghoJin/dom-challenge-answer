import Box from "./Box.js";
import { timer } from "./util.js";

class GameBoard {
  constructor({ $parent, onClickCallback }) {
    this.$parent = $parent;
    this.onClickCallback = onClickCallback;

    this.$main = document.createElement("div");
    this.$main.classList.add("game-board");

    this.$boxes = [];

    for (let i = 0; i < 5; i++) {
      const box = new Box({ $parent: this.$main });
      box.current.dataset.idx = i;
      this.$boxes.push(box);
    }

    this.$parent.appendChild(this.$main);
    this.problems = [];
    this.current = 0;
  }

  start = async (level) => {
    this.createProblem(level);
    this.current = 0;
    this.$main.removeEventListener("click", this.onClick);
    for (let i = 0; i < this.problems.length; i++) {
      const boxIndex = this.problems[i];
      const flickerBox = this.$boxes[boxIndex];
      await flickerBox.flicker("blue");
      await timer(600);
    }
    this.clickEventId = this.$main.addEventListener("click", this.onClick);
  };

  removeClickEvent = () => {
    this.$main.removeEventListener("click", this.onClick);
  };

  wrong = async (idx) => {
    const flickerBox = this.$boxes[idx];
    await flickerBox.flicker("red");
    await timer(600);
  };

  correct = async (idx) => {
    const flickerBox = this.$boxes[idx];
    await flickerBox.flicker("blue");
    await timer(600);
  };

  createProblem = (level) => {
    this.reset();

    for (let i = 0; i < level; i++) {
      const current = Math.floor(Math.random() * 100) % 5;
      this.problems.push(current);
    }
  };

  onClick = (e) => {
    const index = e.target.dataset.idx;

    if (index) {
      this.onClickCallback(parseInt(index));
      return;
    }
  };

  reset = () => {
    this.problems = [];
  };

  shake = async () => {
    this.$main.classList.add("shake");
    await timer(300);
    this.$main.classList.remove("shake");
  };

  isAnswer = (answer) => {
    const isDone = this.current + 1 >= this.problems.length;
    if (this.problems[this.current] === undefined) {
      this.current++;
      return { value: false, next: isDone };
    }
    if (this.problems[this.current] === answer) {
      this.current++;
      return { value: true, next: isDone };
    }

    return { value: false, next: isDone };
  };
}

export default GameBoard;
