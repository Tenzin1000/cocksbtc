import Phaser from "phaser";

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");

    this.logo = null;
    this.tagLine = null;
    this.loadingText = null;
    this.loadingBarBg = null;
    this.loadingBar = null;
  }
  preload() {
    this.load.image("chicken", "/images/chicken.png");
    this.load.image("egg", "/images/egg.png");
    this.load.image("heart", "/images/heart.png");
    this.load.image("hand", "/images/hand.png");

    // for audio

    this.load.audio("background", "/sound/backgroundmusic.mp3");
    this.load.audio("5chicken", "/sound/5chicken.mp3");
    this.load.audio("chickenClicked", "/sound/chickenClicked.mp3");
    this.load.audio("eggsClicked", "/sound/eggsClicked.mp3");

    this.logo = this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2 - 50,
        "COCKSBTC",
        {
          font: "55px pixel",
        }
      )
      .setOrigin(0.5, 0.5);

    this.tagLine = this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2,
        "The Chicken Game",
        {
          font: "16px pixel",
          fill: "#ffffff",
        }
      )
      .setOrigin(0.5, 0.5);

    this.loadingText = this.add
      .text(20, this.game.config.height - 65, "Loading:0%", {
        font: "16px pixel",
        fill: "#ffffff",
      })
      .setOrigin(0, 0.5);

    this.loadingBarBg = this.add.graphics();

    this.loadingBarBg.fillStyle(0x222222, 0.8);
    this.loadingBarBg.fillRect(
      20,
      this.game.config.height - 50,
      this.game.config.width - 40,
      20
    );

    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0xffffff, 1);
    this.loadingBar.fillRect(20, this.game.config.height - 50, 0, 20);

    this.load.on("progress", () => {
      this.loadingBar
        .clear()
        .fillStyle(0xffffff, 1)
        .fillRect(
          20,
          this.game.config.height - 50,
          (this.game.config.width - 40) * this.load.progress,
          20
        );
      this.loadingText.setText(
        `loading :  ${Math.round(this.load.progress * 100)}%`
      );
    });
  }
  create() {
    this.time.addEvent({
      duration: 500,
      callback: () => {
        this.scene.start("MainMenuScene");
      },
      loop: false,
    });
  }
  update() {}
}
