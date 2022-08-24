class ProgressBar {
  constructor({ $parent, onCompleteCallback }) {
    this.$parent = $parent;
    this.onCompleteCallback = onCompleteCallback;

    this.$main = document.createElement("div");
    this.$main.classList.add("progress-bar");

    this.$emptyBar = document.createElement("div");
    this.$emptyBar.classList.add("empty-bar");
    this.$colorBar = document.createElement("div");
    this.$colorBar.classList.add("color-bar");

    this.$main.appendChild(this.$emptyBar);
    this.$main.appendChild(this.$colorBar);
    this.$parent.appendChild(this.$main);
  }

  resetAndStart = () => {
    this.empty();
    requestAnimationFrame(() => {
      this.fill();
    });
  };

  fill = () => {
    console.log("fill");
    this.$colorBar.style.transition = "width 3s linear";
    this.$colorBar.style.width = "100%";
    setTimeout(() => {
      this.onCompleteCallback();
    }, 3000);
  };

  empty = () => {
    console.log("empty");
    this.$colorBar.style.width = 0;
    this.$colorBar.style.transition = undefined;
  };

  onComplete = () => {
    console.log("onComplete");
    this.onCompleteCallback();
  };
}

export default ProgressBar;
