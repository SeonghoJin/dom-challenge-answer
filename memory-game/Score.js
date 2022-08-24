class Score {
  constructor({ $parent }) {
    this.$parent = $parent;

    this.$main = document.createElement("div");

    this.$parent.appendChild(this.$main);
    this.score = 0;
    this.render();
  }

  increase = () => {
    this.score++;
    this.render();
  };

  getScore = () => {
    return this.score;
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
