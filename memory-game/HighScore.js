class HighScore {
  constructor({ $parent }) {
    this.$parent = $parent;

    this.$main = document.createElement("div");

    this.$parent.appendChild(this.$main);
    this.highScore = 0;
    this.render();
  }

  compare = (value) => {
    this.highScore = Math.max(this.highScore, value);
    this.render();
  };

  render = () => {
    this.$main.innerHTML = `HighScore: ${this.highScore}`;
  };
}

export default HighScore;
