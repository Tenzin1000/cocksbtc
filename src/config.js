import Phaser from "phaser";
import LoadingScene from "./scenes/loadingScene";
import PreLoadingScene from "./scenes/preLoadingScene";
import GameScene from "./scenes/gameScene";
import GameOver from "./scenes/gameOver";
import MainMenuScene from "./scenes/mainMenuScene";
import AboutScene from "./scenes/aboutScene";
import LeadboardScene from "./scenes/LeadboradScene";
import FontChangeScene from "./scenes/fontChange";
import SettingsScene from "./scenes/settingsScene";

const config = {
  type: Phaser.CANVAS,
  width: 400,
  height: 600,
  backgroundColor: "#404B56",
  canvas: document.getElementById("game-canvas"),
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 10 },
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    PreLoadingScene,
    LoadingScene,
    GameScene,
    GameOver,
    MainMenuScene,
    AboutScene,
    LeadboardScene,
    FontChangeScene,
    SettingsScene,
  ],

  // render: {
  //   pixelArt: false, // Disable pixel art mode
  //   antialias: true, // Enable anti-aliasing
  // },
};

export default config;
