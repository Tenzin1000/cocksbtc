import Phaser from "phaser";
import Button from "../components/button";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
    this.heading = null;
    this.scoreText = null;
    this.highScoreText = null;
    this.restartbtn = null;
    this.homeBtn = null;
    this.creditText = null;

    this.score = 0;
    this.highScore = 0;
  }
  init(data) {
    if (this.score === null) {
      this.score = 0;
    }
    this.score = data.score;
    this.highScore = localStorage.getItem("highscore") || 0;

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem("highscore", this.highScore);
    }
  }
  preload() {
    this.heading = this.add
      .text(this.game.config.width / 2, 120, "Game Over", {
        font: "55px pixel",
        resolution: 3,
      })
      .setOrigin(0.5, 0.5);

    this.scoreText = this.add
      .text(this.game.config.width / 2, 200, `${this.score}`, {
        font: "28px pixel",
      })
      .setOrigin(0.5, 0.5);

    this.highScoreText = this.add
      .text(this.game.config.width / 2, 240, `Highscore : ${this.highScore}`, {
        font: "22px pixel",
      })
      .setOrigin(0.5, 0.5);

    this.restartbtn = new Button(
      this,
      this.game.config.width / 2,
      320,
      "Restart",
      () => {
        this.scene.start("GameScene");
      }
    );

    this.homeBtn = new Button(
      this,
      this.game.config.width / 2,
      380,
      "Home",
      () => {
        this.scene.start("MainMenuScene");
      }
    );

    this.creditText = this.add
      .text(this.game.config.width / 2, 580, "@ 2024 | Cocksbtc")
      .setOrigin(0.5, 0.5);
  }

  create() {}
  update() {}
}
