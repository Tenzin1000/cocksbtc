import Phaser from "phaser";

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, text, callback) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.text = text;
    this.callback = callback;
    // creating button function
    this.button = this.scene.add.graphics().fillStyle(0xffffff, 1);

    this.btnText = this.scene.add
      .text(0, 0, this.text, { font: "30px pixel", fill: "#000000" })
      .setOrigin(0.5, 0.5);

    this.buttonWidth = this.btnText.width + 20;
    this.button.fillRoundedRect(
      -this.buttonWidth / 2,
      -20,
      this.buttonWidth,
      50,
      5
    );

    this.add(this.button);
    this.add(this.btnText);

    this.setInteractive(
      new Phaser.Geom.Rectangle(
        -this.buttonWidth / 2,
        -20,
        this.buttonWidth,
        50
      ),
      Phaser.Geom.Rectangle.Contains
    );
    this.on("pointerdown", callback);

    this.on("pointerover", () => {
      this.scene.game.canvas.style.cursor = "pointer";
      this.button
        .clear()
        .fillStyle(0xffffff, 0.9)
        .fillRoundedRect(-this.buttonWidth / 2, -20, this.buttonWidth, 50, 5);
    });

    this.on("pointerout", () => {
      this.scene.game.canvas.style.cursor = "pointer";
      this.button
        .clear()
        .fillStyle(0xffffff, 1)
        .fillRoundedRect(-this.buttonWidth / 2, -20, this.buttonWidth, 50, 5);
    });

    this.scene.add.existing(this);
  }
}
