class Star {
  constructor({ $parent, value }) {
    this.$parent = $parent;
    this.$main = document.createElement("i");
    this.$main.classList.add("fa");
    this.$main.classList.add("fa-star-o");
    this.$main.dataset.value = value;
    this.$parent.appendChild(this.$main);
  }

  on = () => {
    this.$main.classList.remove("fa-star-o");
    this.$main.classList.add("fa-star");
  };

  off = () => {
    this.$main.classList.remove("fa-star");
    this.$main.classList.add("fa-star-o");
  };
}

class StarGroup {
  constructor($el, count, callback) {
    this.element = document.querySelector($el);
    this.count = count;
    this.state = -1;
    this.callback = callback;
    this.init();
    this.bindEvents();
  }

  init = () => {
    this.stars = [];

    for (let i = 1; i <= this.count; i++) {
      this.stars.push(
        new Star({
          $parent: this.element,
          value: i,
        })
      );
    }
  };

  onMouseOver = (e) => {
    const ratingVal = e.target.dataset.value;
    if (!ratingVal) {
      return;
    }
    this.fill(ratingVal);
  };

  fill = (value) => {
    for (let i = 0; i < this.count; i++) {
      if (i < value) {
        this.element.children[i].classList.add("fa-star");
      } else {
        this.element.children[i].classList.remove("fa-star");
      }
    }
  };

  onMouseLeave = () => {
    this.state = -1;
    this.render();
  };

  onClick = (e) => {
    this.active = e.target.dataset.value;
    this.callback(this.active);
  };

  bindEvents = () => {
    this.element.addEventListener("mouseover", this.onMouseOver.bind(this));
    this.element.addEventListener("click", this.onClick.bind(this));
    this.element.addEventListener("mouseleave", this.onMouseLeave.bind(this));
  };

  render = () => {
    this.stars.forEach((star, index) => {
      if (index <= this.state) {
        star.on();
        return;
      }

      star.off();
      return;
    });
  };
}

function getStar(value) {
  document.getElementById("display-star-value").innerHTML = value;
}

new StarGroup("#star", 5, getStar);
