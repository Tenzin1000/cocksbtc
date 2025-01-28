import Phaser from "phaser";

export default class PreLoadingScene extends Phaser.Scene {
  constructor() {
    super("PreLoadingScene");
  }
  preload() {
    // Loading web font
    this.load.script(
      "webfont",
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    );
  }
  create() {
    this.time.addEvent({
      duration: 1000,
      callback: () => {
        WebFont.load({
          custom: {
            // families: ["pixel"],
            families: [
              "pixel",
              "Asap-Regular",
              "Asap-Bold",
              "Asap-ExtraBold",
              "Asap-Medium",
              "Asap-Regular",
              "Asap-SemiBold",
              "tesringasap",
            ],
          },
          active: () => {
            this.scene.start("LoadingScene");
          },
        });
      },
      callbackScope: this,
      loop: false,
    });
  }
  update() {}
}
