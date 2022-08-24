class ChessItem {
  constructor({ $parent, initColor, y, x }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("chess-item");
    this.initColor = initColor;
    this.backgorundColor = initColor;

    this.$parent.appendChild(this.$main);
    this.$main.dataset.y = y;
    this.$main.dataset.x = x;
  }

  set backgorundColor(color) {
    this.$main.style.backgroundColor = color;
  }

  init = () => {
    this.$main.style.backgroundColor = this.initColor;
  };
}

export default ChessItem;
