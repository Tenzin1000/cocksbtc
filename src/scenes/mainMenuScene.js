import Phaser from "phaser";
import Button from "../components/button";

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super("MainMenuScene");
    this.logo = null;
    this.tagLine = null;
    this.playBtn = null;
    this.leaderBtn = null;
    this.quitBtn = null;
    this.aboutBtn = null;
    this.creditText = null;
  }
  preload() {
    this.logo = this.add
      .text(this.game.config.width / 2, 120, "COCKSBTC", {
        font: "60px pixel",
        resolution: 3,
      })
      .setOrigin(0.5, 0.5);

    this.tagLine = this.add
      .text(this.game.config.width / 2, 165, "The Chicken Game", {
        font: "16px pixel",
        fill: "#ffffff",
      })
      .setOrigin(0.5, 0.5);

    this.playBtn = new Button(
      this,
      this.game.config.width / 2,
      250,
      "Play",
      () => {
        this.scene.start("GameScene");
      }
    );

    this.leaderBtn = new Button(
      this,
      this.game.config.width / 2,
      325,
      "Settings",
      () => {
        this.scene.start("SettingsScene");
      }
    );
    this.aboutBtn = new Button(
      this,
      this.game.config.width / 2,
      400,
      "About",
      () => {
        this.scene.start("AboutScene");
      }
    );
    this.quitBtn = new Button(
      this,
      this.game.config.width / 2,
      475,
      "Quit",
      () => {
        window.close();
      }
    );

    this.creditText = this.add
      .text(this.game.config.width / 2, 580, "@ 2024 | Cocksbtc")
      .setOrigin(0.5, 0.5);
  }

  create() {
    console.log("mainMenuScene");
  }
  update() {}
}
