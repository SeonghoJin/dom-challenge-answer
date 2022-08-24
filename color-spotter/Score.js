class Score {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("score");
    this.score = 0;

    this.$parent.appendChild(this.$main);
    this.render();
  }

  increase = () => {
    this.score++;
    this.render();
  };

  reset = () => {
    this.score = 0;
    this.render();
  };

  render = () => {
    this.$main.innerHTML = `Score: ${this.score}`;
  };
}

export default Score;
