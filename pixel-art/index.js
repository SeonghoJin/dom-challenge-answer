const $body = document.querySelector("body");

class Box {
 
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("box");
    this.$parent.appendChild(this.$main);
  }

  set backgroundColor(color) {
    this.$main.style.backgroundColor = color;
  }

  get current() {
    return this.$main;
  }
}

class PixelArt {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.createPixelGroup();
    this.$palette = new Palette({$parent :this.$main});

    $parent.appendChild(this.$main);
  }

  createPixelGroup = () => {
    this.$pixelGroup = document.createElement("div");
    this.$pixelGroup.classList.add("pixel-group");

    this.$pixels = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const $pixel = new Box({ $parent: this.$pixelGroup });
        $pixel.current.addEventListener("click", this.onPixelClick);
        $pixel.current.addEventListener("drag", this.onDrag);
        $pixel.current.classList.add("pixel");
        this.$pixels.push($pixel);
      }
    }
    this.$main.addEventListener("mousedown", this.onMouseDown);
    this.$main.addEventListener("mouseup", this.onMouseUp);
    this.$main.appendChild(this.$pixelGroup);
  };

  onPixelClick = (e) => {
    const currentColor = this.$palette.getColor();
    e.target.style.backgroundColor = currentColor;
  };

  onMouseDown = (e) => {
    this.$main.addEventListener("mousemove", this.onMouseMove);
  };

  onMouseMove = (e) => {
    if (e.target.classList.contains("pixel")) {
      const currentColor = this.$palette.getColor();
      e.target.style.backgroundColor = currentColor;
    }
  };

  onMouseUp = (e) => {
    this.$main.removeEventListener("mousemove", this.onMouseMove);
  };

  onDrag = (e) => {
    const currentColor = this.$palette.getColor();
    e.target.style.backgroundColor = currentColor;
  };
}

class Palette {
  /**
   *
   * @param {{
   *  $parent: HTMLDivElement
   * }} param0
   */
  constructor({ $parent }) {
    this.$main = document.createElement("div");
    this.$main.classList.add("palette");
    this.colors = [
      "#6C3B2A",
      "#0A0A0A",
      "#6A5D4D",
      "#A18594",
      "#00BB2D",
      "#AF2B1E",
      "#2271B3",
      "#B44C43",
      "#898176",
      "#4C514A",
    ];
    this.selectedColor = null;
    this.paletteBoxes = [];
    for (let i = 0; i < 10; i++) {
      const box = new Box({ $parent: this.$main });
      box.backgroundColor = this.colors[i];
      box.current.dataset.color = this.colors[i];
      box.current.addEventListener("click", this.onClick);
      this.paletteBoxes.push(box);
    }
    $parent.appendChild(this.$main);
  }

  getColor = () => {
    if (this.selectedColor === null) {
      console.warn("not selected color");
      return "#000000";
    }

    return this.selectedColor;
  };

  onClick = (e) => {
    const color = e.target.dataset.color;
    this.selectedColor = color;
  };
}

new PixelArt({ $parent: $body });
