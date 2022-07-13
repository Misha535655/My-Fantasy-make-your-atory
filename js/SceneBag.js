class SceneBag extends Phaser.Scene {
  constructor() {
    super({ key: "SceneBag" });
  }
  preload() {
    this.load.image("bgBedroom", "../image/bg1.png");
    this.load.image("LexyDress", "../image/LexyClothes/LexyDress.png");
    this.load.image("LexyTop", "../image/LexyClothes/LexyTop.png");
    this.load.image("LexyTopBag1", "../image/LexyClothes/LexyTopBag1.png");
    this.load.image("LexyTopBag2", "../image/LexyClothes/LexyTopBag2.png");
    this.load.image("LexyDressBag1", "../image/LexyClothes/LexyDressBag1.png");
    this.load.image("LexyDressBag2", "../image/LexyClothes/LexyDressBag2.png");
    this.load.image("bag1", "../image/ItemChoose/bag1.png");
    this.load.image("bag2", "../image/ItemChoose/bag2.png");
    this.load.image("ChooseBag", "../image/Choosers/ChooseBag.png");
    this.load.image("Level2", "../image/Levels/Level2.png");
  }
  create() {
    getState.bgBedroom = this.add.image(400, 450, "bgBedroom");
    getState.bgBedroom.setScale(1.35);
    switch (getState.Clothes) {
      case "LexyDress":
        getState.Clothes = this.add.image(0, 0, "LexyDress");
        break;
      case "LexyTop":
        getState.Clothes = this.add.image(0, 0, "LexyTop");
        break;
      default:
        break;
    }

    getState.Item1 = this.add.image(0, 0, "bag1").setScale(0).setInteractive();
    getState.Item2 = this.add.image(0, 0, "bag2").setScale(0).setInteractive();
    getState.Hand = this.add
      .image(getState.width / 3, getState.height, "Hand")
      .setScale(0);
    getState.Chooser = this.add.image(0, 0, "ChooseBag");

    getState.aGrid.placeAtIndex(127, getState.Clothes);
    getState.aGrid.placeAtIndex(191, getState.Item1);
    getState.aGrid.placeAtIndex(183, getState.Item2);
    getState.aGrid.placeAtIndex(7, getState.Chooser);
    this.tweens.add({
      targets: [getState.Item1, getState.Item2],
      duration: 1000,
      ease: "Sine.easeInOut",
      yoyo: false,
      repeat: 0,
      props: { scale: 1 },
    });

    getState.Item1.on("pointerup", () => {
      getState.Hand.setScale(0);
      getState.Chooser.setScale(0);
      getState.Level = this.add.image(300, 50, "Level2");
      switch (getState.Clothes.texture.key) {
        case "LexyDress":
          getState.Clothes = "LexyDressBag1";
          break;
        case "LexyTop":
          getState.Clothes = "LexyTopBag1";
          break;

        default:
          break;
      }
      this.add.sprite(400, 300, "anim1").play("snooze");
      this.add.sprite(400, 500, "anim1").play("snooze");
      getState.Item1.setScale(0.7);
      this.tweens.add({
        targets: [getState.Item1],
        duration: 1000,
        ease: "Sine.easeInOut",
        yoyo: false,
        repeat: 0,
        props: { scale: 1 },
      });
      this.time.delayedCall(1000, () => this.scene.start("SceneAccessory"));
    });

    getState.Item2.on("pointerup", () => {
      getState.Hand.setScale(0);
      getState.Chooser.setScale(0);
      getState.Level = this.add.image(300, 50, "Level2");
      switch (getState.Clothes.texture.key) {
        case "LexyDress":
          getState.Clothes = "LexyDressBag2";
          break;
        case "LexyTop":
          getState.Clothes = "LexyTopBag2";
          break;

        default:
          break;
      }
      this.add.sprite(400, 300, "anim1").play("snooze");
      this.add.sprite(400, 500, "anim1").play("snooze");
      getState.Item2.setScale(0.7);
      this.tweens.add({
        targets: [getState.Item2],
        duration: 1000,
        ease: "Sine.easeInOut",
        yoyo: false,
        repeat: 0,
        props: { scale: 1 },
      });
      this.time.delayedCall(1000, () => this.scene.start("SceneAccessory"));
    });

    this.time.delayedCall(5000, () => {
      this.tweens.add({
        targets: [getState.Hand],
        x: 3 * (getState.width / 4),
        duration: 2000,
        ease: "Sine.easeInOut",
        yoyo: true,
        repeat: -1,
        delay: 1000,
      });
      getState.Hand.setScale(1);
    });
  }
  update() {}
}
