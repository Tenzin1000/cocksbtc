import Phaser from "phaser";

export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super("SettingsScene");
  }

  preload() {}
  create() {
    this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2 - 150,
        "Settings",
        { font: "25px pixel" }
      )
      .setOrigin(0.5, 0.5);
  }
  update() {}
}
