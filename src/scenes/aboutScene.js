import Phaser from "phaser";
import Button from "../components/button";

export default class AboutScene extends Phaser.Scene {
  constructor() {
    super("AboutScene");
    this.logo = null;
    this.tagLine = null;
    this.text = null;
    this.backBtn = null;
    this.creditText = null;
  }
  preload() {}

  create() {
    this.logo = this.add
      .text(this.game.config.width / 2, 120, "COCKSBTC", {
        font: "60px pixel",
      })
      .setOrigin(0.5, 0.5);

    this.tagLine = this.add
      .text(this.game.config.width / 2, 165, "The Chicken Game", {
        font: "18px pixel",
        fill: "#ffffff",
      })
      .setOrigin(0.5, 0.5);

    this.text = this.add
      .text(
        this.game.config.width / 2,
        300,
        "This game was created by cocksBtc. You get three lives. Click on Chickens to get score, If you click in eggs your life will decrease. if you leave 5 chickens unclicked it results in decreasing one life. ",
        {
          font: "16px pixel",
          fill: "#ffffff",
        }
      )
      .setOrigin(0.5, 0.5)
      .setAlign("center")
      .setWordWrapWidth(300, true);

    this.backBtn = new Button(
      this,
      this.game.config.width / 2,
      475,
      "Back",
      () => {
        this.scene.start("MainMenuScene");
      }
    );
    this.creditText = this.add
      .text(this.game.config.width / 2, 580, "@ 2024 | Cocksbtc")
      .setOrigin(0.5, 0.5);
  }
  update() {}
}
