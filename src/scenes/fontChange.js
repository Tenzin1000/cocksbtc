import Phaser from "phaser";

export default class FontChangeScene extends Phaser.Scene {
  constructor() {
    super("FontChangeScene");
  }
  preload() {}

  create() {
    this.logo = this.add
      .text(this.game.config.width / 2, 100, "Asap-Bold 22px = 2.454x", {
        font: "22px Asap-Bold",
      })
      .setOrigin(0.5, 0.5);

    this.logo = this.add
      .text(this.game.config.width / 2, 150, "Asap-Regular 22px = 2.454x", {
        font: "22px Asap-Regular bold",
      })
      .setOrigin(0.5, 0.5);
    this.logo = this.add
      .text(this.game.config.width / 2, 200, "Asap-ExtraBold 22px = 2.454x", {
        font: "22px Asap-ExtraBold",
        resolution: 4,
      })
      .setOrigin(0.5, 0.5);

    this.logo = this.add
      .text(this.game.config.width / 2, 250, "Asap-Medium 22px = 2.454x", {
        font: "22px Asap-Medium bold",
      })
      .setOrigin(0.5, 0.5);

    this.logo = this.add
      .text(this.game.config.width / 2, 300, "Asap-SemiBold 22px = 2.454x", {
        font: "22px Asap-SemiBold",
      })
      .setOrigin(0.5, 0.5);

    this.logo = this.add
      .text(this.game.config.width / 2, 350, "tesringasap 22px = 2.454x", {
        font: "22px tesringasap",
      })
      .setOrigin(0.5, 0.5);
  }
  update() {}
}
