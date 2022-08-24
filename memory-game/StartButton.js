class StartButton {
  constructor({ $parent, onClickCallback }) {
    this.$parent = $parent;

    this.$main = document.createElement("button");
    this.$main.innerText = "start";

    this.$main.addEventListener("click", () => {
      onClickCallback();
    });

    this.$parent.appendChild(this.$main);
  }

  disable = () => {
    this.$main.disabled = true;
  };

  able = () => {
    this.$main.disabled = false;
  };
}

export default StartButton;
