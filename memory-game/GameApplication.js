import GameBoard from "./GameBoard.js";
import StartButton from "./StartButton.js";
import HighScore from "./HighScore.js";
import Score from "./Score.js";
import { timer } from "./util.js";

class GameApplication {
  constructor({ $parent }) {
    this.$parent = $parent;
    this.$main = document.createElement("div");
    this.$main.classList.add("game-application");

    this.$gameBoard = new GameBoard({
      $parent: this.$main,
      onClickCallback: this.onClickGameBoard,
    });

    this.$startButton = new StartButton({
      $parent: this.$main,
      onClickCallback: async () => {
        this.$startButton.disable();
        const score = this.$score.getScore();
        await this.$gameBoard.start(score + 1);
      },
    });

    this.$score = new Score({ $parent: this.$main });
    this.$highScore = new HighScore({ $parent: this.$main });

    this.$parent.appendChild(this.$main);
  }

  /**
   *
   * @param {number} idx
   */
  onClickGameBoard = async (idx) => {
    if (this.isClicking) {
      return;
    }
    this.isClicking = true;
    const { value, next } = this.$gameBoard.isAnswer(idx);
    if (value === false) {
      this.$gameBoard.wrong(idx);
      this.$gameBoard.removeClickEvent();
      this.$score.reset();
      this.$startButton.able();
      await this.$gameBoard.shake();
      this.isClicking = false;
      return;
    }

    if (value === true) {
      this.$gameBoard.correct(idx);
      await timer(500);
      this.isClicking = false;
    }

    if (next === true) {
      this.$score.increase();
      const score = this.$score.getScore();
      this.$highScore.compare(score);
      await timer(1000);
      this.$gameBoard.start(score + 1);
      this.isClicking = false;
      return;
    }

    if (next === false) {
      this.isClicking = false;
    }
  };
}

export default GameApplication;
