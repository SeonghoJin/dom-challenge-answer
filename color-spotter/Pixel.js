class Pixel {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("pixel");
    this.$parent.appendChild(this.$main);
  }

  set backgroundColor(color) {
    this.$main.style.backgroundColor = color;
  }

  set isOddColor(flag) {
    this.$main.dataset.isOddColor = flag;
  }

  remove = () => {
    this.$main.remove();
  };
}

export default Pixel;
