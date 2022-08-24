import PixelGrid from "./PixelGrid.js";
import Score from "./Score.js";

class ColorSpotterApplication {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("color-spotter-application");
    this.$score = new Score({ $parent: this.$main });
    this.$pixelGrid = new PixelGrid({
      $parent: this.$main,
      onClickNotOddPixelCallback: () => {
        this.$score.reset();
        this.$pixelGrid.reset();
      },
      onClickOddPixelCallback: () => {
        this.$score.increase();
        this.$pixelGrid.increateLevel();
      },
    });

    this.$parent.appendChild(this.$main);
  }
}

export default ColorSpotterApplication;
