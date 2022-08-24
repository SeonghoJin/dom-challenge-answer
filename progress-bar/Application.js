import ProgressBar from "./ProgressBar.js";

class Application {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("application");
    this.queue = 0;

    this.$startButton = document.createElement("button");
    this.$progressBar = new ProgressBar({
      $parent: this.$main,
      onCompleteCallback: () => {
        this.queue--;
        if (this.queue >= 1) {
          this.$progressBar.resetAndStart();
        } else {
          this.$progressBar.empty();
        }
        this.$startButton.innerHTML = this.queue;
      },
    });
    this.$progressBar.empty();
    this.$startButton.innerHTML = 0;
    this.$startButton.addEventListener("click", () => {
      if (this.queue === 0) {
        this.$progressBar.resetAndStart();
      }
      this.queue++;
      this.$startButton.innerHTML = this.queue;
    });

    this.$main.appendChild(this.$startButton);
    this.$parent.appendChild(this.$main);
  }
}

export default Application;
