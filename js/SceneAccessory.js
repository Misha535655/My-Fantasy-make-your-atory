class SceneAccessory extends Phaser.Scene {
  constructor() {
    super({ key: "SceneAccessory" });
  }
  preload() {
    this.load.image("bgBedroom", "../image/bg1.png");
    this.load.image("LexyTopBag1", "../image/LexyClothes/LexyTopBag1.png");
    this.load.image("LexyTopBag2", "../image/LexyClothes/LexyTopBag2.png");
    this.load.image("LexyDressBag1", "../image/LexyClothes/LexyDressBag1.png");
    this.load.image("LexyDressBag2", "../image/LexyClothes/LexyDressBag2.png");

    this.load.image(
      "LexyDressBag1Accessory1",
      "../image/LexyClothes/LexyDressBag1Accessory1.png"
    );
    this.load.image(
      "LexyDressBag1Accessory2",
      "../image/LexyClothes/LexyDressBag1Accessory2.png"
    );
    this.load.image(
      "LexyDressBag2Accessory1",
      "../image/LexyClothes/LexyDressBag2Accessory1.png"
    );
    this.load.image(
      "LexyDressBag2Accessory2",
      "../image/LexyClothes/LexyDressBag2Accessory2.png"
    );
    this.load.image(
      "LexyTopBag1Accessory1",
      "../image/LexyClothes/LexyTopBag1Accessory1.png"
    );
    this.load.image(
      "LexyTopBag1Accessory2",
      "../image/LexyClothes/LexyTopBag1Accessory2.png"
    );
    this.load.image(
      "LexyTopBag2Accessory1",
      "../image/LexyClothes/LexyTopBag2Accessory1.png"
    );
    this.load.image(
      "LexyTopBag2Accessory2",
      "../image/LexyClothes/LexyTopBag2Accessory2.png"
    );

    this.load.image("Accessory1", "../image/ItemChoose/Accessory1.png");
    this.load.image("Accessory2", "../image/ItemChoose/Accessory2.png");
    this.load.image("Accessory3", "../image/ItemChoose/Accessory3.png");
    this.load.image("ChooseAccessory", "../image/Choosers/ChooseAccessory.png");
    this.load.image("Level3", "../image/Levels/Level3.png");
  }
  create() {
    getState.bgBedroom = this.add.image(400, 450, "bgBedroom");
    getState.bgBedroom.setScale(1.35);

    switch (getState.Clothes) {
      case "LexyTopBag1":
        getState.Clothes = this.add.image(0, 0, "LexyTopBag1");
        getState.Item1 = this.add
          .image(0, 0, "Accessory1")
          .setScale(0)
          .setInteractive();
        getState.Item2 = this.add
          .image(0, 0, "Accessory3")
          .setScale(0)
          .setInteractive();
        break;
      case "LexyTopBag2":
        getState.Clothes = this.add.image(0, 0, "LexyTopBag2");
        getState.Item1 = this.add
          .image(0, 0, "Accessory1")
          .setScale(0)
          .setInteractive();
        getState.Item2 = this.add
          .image(0, 0, "Accessory3")
          .setScale(0)
          .setInteractive();
        break;
      case "LexyDressBag1":
        getState.Clothes = this.add.image(0, 0, "LexyDressBag1");
        getState.Item1 = this.add
          .image(0, 0, "Accessory1")
          .setScale(0)
          .setInteractive();
        getState.Item2 = this.add
          .image(0, 0, "Accessory2")
          .setScale(0)
          .setInteractive();
        break;
      case "LexyDressBag2":
        getState.Clothes = this.add.image(0, 0, "LexyDressBag2");
        getState.Item1 = this.add
          .image(0, 0, "Accessory1")
          .setScale(0)
          .setInteractive();
        getState.Item2 = this.add
          .image(0, 0, "Accessory2")
          .setScale(0)
          .setInteractive();
        break;
      default:
        break;
    }

    getState.Hand = this.add
      .image(getState.width / 3, getState.height, "Hand")
      .setScale(0);
    getState.Chooser = this.add.image(300, 50, "ChooseAccessory");
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
      getState.Level = this.add.image(300, 50, "Level3");
      getState.Item1.setScale(0.7);

      switch (getState.Clothes.texture.key) {
        case "LexyTopBag1":
          getState.Clothes = "LexyTopBag1Accessory1";
          break;
        case "LexyTopBag2":
          getState.Clothes = "LexyTopBag2Accessory1";
          break;
        case "LexyDressBag1":
          getState.Clothes = "LexyDressBag1Accessory1";

          break;
        case "LexyDressBag2":
          getState.Clothes = "LexyDressBag2Accessory1";

          break;
        default:
          break;
      }
      this.add.sprite(400, 300, "anim1").play("snooze");
      this.add.sprite(400, 500, "anim1").play("snooze");
      this.tweens.add({
        targets: [getState.Item1],
        duration: 1000,
        ease: "Sine.easeInOut",
        yoyo: false,
        repeat: 0,
        props: { scale: 1 },
      });
      this.time.delayedCall(1000, () => this.scene.start("SceneLocation"));
    });

    getState.Item2.on("pointerup", () => {
      getState.Hand.setScale(0);
      getState.Chooser.setScale(0);
      getState.Level = this.add.image(300, 50, "Level3");
      getState.Item2.setScale(0.7);

      switch (getState.Clothes.texture.key) {
        case "LexyTopBag1":
          getState.Clothes = "LexyTopBag1Accessory2";
          break;
        case "LexyTopBag2":
          getState.Clothes = "LexyTopBag2Accessory2";
          break;
        case "LexyDressBag1":
          getState.Clothes = "LexyDressBag1Accessory2";
          break;
        case "LexyDressBag2":
          getState.Clothes = "LexyDressBag2Accessory2";
          break;
        default:
          break;
      }
      this.add.sprite(400, 300, "anim1").play("snooze");
      this.add.sprite(400, 500, "anim1").play("snooze");
      this.tweens.add({
        targets: [getState.Item2],
        duration: 1000,
        ease: "Sine.easeInOut",
        yoyo: false,
        repeat: 0,
        props: { scale: 1 },
      });
      this.time.delayedCall(1000, () => this.scene.start("SceneLocation"));
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

    console.log(this);
  }
  update() {}
}
