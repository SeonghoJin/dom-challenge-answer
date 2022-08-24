import ChessItem from "./ChessItem.js";

class ChessBoard {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("chess-board");
    this.chessItems = [];

    for (let i = 0; i < 8 * 8; i++) {
      const color = (i + Math.floor(i / 8)) % 2 ? "white" : "black";
      this.chessItems.push(
        new ChessItem({
          $parent: this.$main,
          initColor: color,
          y: Math.floor(i / 8),
          x: i % 8,
        })
      );
    }

    this.$parent.appendChild(this.$main);
    this.$main.addEventListener("click", this.onClick);
  }

  onClick = (e) => {
    const cy = e.target.dataset.y;
    const cx = e.target.dataset.x;

    for (let i = 0; i < this.chessItems.length; i++) {
      const hy = Math.floor(i / 8);
      const hx = i % 8;

      const dy = Math.abs(hy - cy);
      const dx = Math.abs(hx - cx);

      if (dy === dx) {
        this.chessItems[i].backgorundColor = "red";
        continue;
      }

      this.chessItems[i].init();
    }
  };
}

export default ChessBoard;
