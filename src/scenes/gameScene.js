import Phaser from "phaser";

const CHICKEN_INCREMENT = 10;
const CHICKEN_DECREMENT = 20;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.score = null;
    this.lives = 3;

    this.startText = null;
    this.spawnChickenCount = 5;
    this.spawnEggCount = 2;

    this.timer = null;
    this.isGameOver = false;

    this.handImage = null;
  }
  preload() {}
  create() {
    this.score = 0;
    this.scoreText = null;
    this.livesImages = [];
    this.chickens = [];
    this.missedChicken = 0;
    this.eggs = [];
    this.isGameOver = false;
    this.lives = 3;
    this.timer = this.time.addEvent({
      delay: 3000,
      callback: this.spawnChickenAndEgg,
      callbackScope: this,
      loop: true,
    });

    this.handImage = this.add
      .image(
        this.game.config.width / 2,
        this.game.config.height / 2 - 40,
        "hand"
      )
      .setScale(0.2)
      .setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: this.handImage,
      y: this.game.config.height / 2 - 30,
      rotation: -0.1,
      duration: 1000,
      ease: "Sine.easeInOut",
      yoyo: true,
      reapeat: -1,
    });

    this.startText = this.add.text(
      this.game.config.width / 2,
      this.game.config.height / 2 + 30,
      "Click on CHICKENS and avoid the EGGS!",
      { font: "24px pixel" }
    );
    this.startText
      .setOrigin(0.5, 0.5)
      .setDepth(100)
      .setAlign("center")
      .setWordWrapWidth(350, true);

    this.time.addEvent({
      delay: 2000,
      callback: () => {
        this.startText.destroy();
        this.handImage.destroy();
      },
      loop: false,
    });

    this.spawnChickenAndEgg();
    this.showLivesAndScore();

    // music
    var background = this.sound.add("background");
    background.play({ loop: true });
  }
  showLivesAndScore() {
    if (!this.scoreText) {
      this.scoreText = this.add.text(16, 16, "Score : 0", {
        font: "18px pixel",
      });
    }
    this.scoreText.setText("Score : " + this.score);
    if (this.livesImages.length > 0) {
      this.livesImages.forEach((image) => image.destroy());
      this.livesImages = [];
    }
    // Clear previous lives
    this.livesImages.forEach((image) => image.destroy());
    this.livesImages = [];

    for (let i = 0; i < this.lives; i++) {
      const heart = this.add
        .image(this.game.config.width - 40 - i * 30, 20, "heart")
        .setDepth(100)
        .setScale(0.015)
        .setOrigin(0, 0);
      this.livesImages.push(heart);
    }
    if (this.lives === 0 && !this.isGameOver) {
      this.isGameOver = true;
      this.timer.remove();

      this.add
        .text(
          this.game.config.width / 2,
          this.game.config.height / 2,
          "Game Over",
          { font: "48px pixel", fill: "#ffffff" }
        )
        .setOrigin(0.5, 0.5);
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          this.scene.start("GameOverScene", { score: this.score });
        },
        loop: false,
      });
    }
  }
  spawnChickenAndEgg() {
    for (let i = 0; i < this.spawnChickenCount; i++) {
      const chickenX = Math.random() * (this.game.config.width - 100);
      const chickenY = -(Math.random() * 100) - 50;
      const chicken = this.physics.add
        .image(chickenX, chickenY, "chicken")
        .setScale(0.14)
        .setOrigin(0, 0)
        .setInteractive();
      this.chickens.push(chicken);
      chicken.on("pointerdown", () => {
        var chickenClicked = this.sound.add("chickenClicked");
        chickenClicked.play();

        this.score += CHICKEN_INCREMENT;
        this.showLivesAndScore();
        chicken.destroy();
      });
    }
    for (let i = 0; i < this.spawnEggCount; i++) {
      const eggX = Math.random() * (this.game.config.width - 100);
      const eggY = -(Math.random() * 100) - 50;
      const egg = this.physics.add
        .image(eggX, eggY, "egg")
        .setScale(0.008)
        .setOrigin(0, 0)
        .setInteractive();

      egg.on("pointerdown", () => {
        var eggsClicked = this.sound.add("eggsClicked");
        eggsClicked.play();

        this.lives--;
        this.showLivesAndScore();
        egg.destroy();
      });
      this.eggs.push(egg);
    }
  }
  update() {
    this.chickens.forEach((chicken) => {
      if (chicken.y > this.game.config.height) {
        this.score -= CHICKEN_DECREMENT;
        if (this.score < 0) {
          this.score = 0;
        }
        this.missedChicken++;
        if (this.missedChicken === 5) {
          this.lives--;
          this.missedChicken = 0;
          var fivechicken = this.sound.add("5chicken");
          fivechicken.play();
        }
        this.showLivesAndScore();
        chicken.destroy();
        this.chickens.splice(this.chickens.indexOf(chicken), 1);
      }
    });
    this.eggs.forEach((egg) => {
      if (egg.y > this.game.config.height) {
        egg.destroy();
        this.eggs.splice(this.chickens.indexOf(egg), 1);
      }
    });

    // Stop updating objects after game over
    if (this.isGameOver) {
      this.chickens.forEach((chicken) => {
        if (chicken && chicken.body) chicken.body.allowGravity = false;
      });
      this.eggs.forEach((egg) => {
        if (egg && egg.body) egg.body.allowGravity = false;
      });
    }
  }
}
