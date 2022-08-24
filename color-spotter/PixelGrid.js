import Pixel from "./Pixel.js";
import { getRandomColors } from "./util.js";

class PixelGrid {
  constructor({
    $parent,
    onClickNotOddPixelCallback,
    onClickOddPixelCallback,
  }) {
    this.$parent = $parent;
    this.onClickNotOddPixelCallback = onClickNotOddPixelCallback;
    this.onClickOddPixelCallback = onClickOddPixelCallback;
    this.initialGridCount = 4;
    this.$main = document.createElement("div");
    this.$main.classList.add("pixel-grid");
    this.$parent.appendChild(this.$main);
    this.pixels = [];
    this.changeGrid(4);
    this.setPixelColors();
    this.removeShakeCallbackId = null;
    this.$main.addEventListener("click", this.onClickPixel);
  }

  createPixels = () => {
    for (let i = 0; i < this.initialGridCount * this.initialGridCount; i++) {
      this.pixels[i] = new Pixel({ $parent: this.$main });
    }
  };

  removeAllPixels = () => {
    for (let i = 0; i < this.pixels.length; i++) {
      this.pixels[i].remove();
    }
  };

  changeGrid = (count) => {
    this.initialGridCount = count;
    this.removeAllPixels();
    this.createPixels();
    this.setPixelColors();
    this.$main.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
    this.$main.style.gridTemplateRows = `repeat(${count}, 1fr)`;
  };

  increateLevel = () => {
    this.changeGrid(this.initialGridCount + 1);
  };

  shake = () => {
    this.$main.classList.add("shake");
  };

  reset = () => {
    this.changeGrid(4);
  };

  onClickPixel = (e) => {
    const isOddColor = e.target.dataset.isOddColor;
    if (isOddColor === "false") {
      this.animation = true;
      this.shake();
      this.removeShakeAfter800ms();
      this.onClickNotOddPixelCallback();
    }

    if (isOddColor === "true") {
      this.onClickOddPixelCallback();
    }
  };

  removeShakeAfter800ms = () => {
    if (this.removeShakeCallbackId) {
      clearTimeout(this.removeShakeCallbackId);
    }

    this.removeShakeCallbackId = setTimeout(() => {
      this.$main.classList.remove("shake");
    }, 800);
  };

  setPixelColors = () => {
    const { color, oddColor } = getRandomColors();
    const oddColorIndex =
      Math.round(Math.random() * 1000) %
      (this.initialGridCount * this.initialGridCount);
    for (let i = 0; i < this.pixels.length; i++) {
      if (oddColorIndex === i) {
        this.pixels[i].backgroundColor = oddColor;
        this.pixels[i].isOddColor = true;
        continue;
      }

      this.pixels[i].backgroundColor = color;
      this.pixels[i].isOddColor = false;
    }
    console.log(oddColorIndex);
  };
}

export default PixelGrid;
