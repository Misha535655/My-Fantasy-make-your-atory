const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 600,
  height: 900,
  backgroundColor: "#333333",
  scene: [SceneClothes, SceneBag, SceneAccessory, SceneLocation],
};
console.log(window);
const game = new Phaser.Game(config);
