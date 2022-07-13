class SceneLocation extends Phaser.Scene {
  constructor() {
    super({ key: "SceneLocation" });
  }
  preload() {
    this.load.image("bgBedroom", "../image/bg1.png");
    this.load.image("bgRrestoran", "../image/bg2.png");
    this.load.image("bgBeach", "../image/bg3.png");
    this.load.image("Paul2", "../image/Paul2.png");
    this.load.image("Location1", "../image/ItemChoose/Location1.png");
    this.load.image("Location2", "../image/ItemChoose/Location2.png");
    this.load.image("ChoosePlace", "../image/Choosers/ChoosePlace.png");
    this.load.image("button", "../image/button.png");

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
  }
  create() {
    getState.bgBedroom = this.add.image(400, 450, "bgBedroom");
    getState.bgBedroom.setScale(1.35);
    switch (getState.Clothes) {
      case "LexyDressBag1Accessory1":
        getState.Clothes = this.add.image(0, 0, "LexyDressBag1Accessory1");
        break;
      case "LexyDressBag1Accessory2":
        getState.Clothes = this.add.image(0, 0, "LexyDressBag1Accessory2");
        break;
      case "LexyDressBag2Accessory1":
        getState.Clothes = this.add.image(0, 0, "LexyDressBag2Accessory1");
        break;
      case "LexyDressBag2Accessory2":
        getState.Clothes = this.add.image(0, 0, "LexyDressBag2Accessory2");
        break;
      case "LexyTopBag1Accessory1":
        getState.Clothes = this.add.image(0, 0, "LexyTopBag1Accessory1");
        break;
      case "LexyTopBag1Accessory2":
        getState.Clothes = this.add.image(0, 0, "LexyTopBag1Accessory2");
        break;
      case "LexyTopBag2Accessory1":
        getState.Clothes = this.add.image(0, 0, "LexyTopBag2Accessory1");
        break;
      case "LexyTopBag2Accessory2":
        getState.Clothes = this.add.image(0, 0, "LexyTopBag2Accessory2");
        break;
      default:
        break;
    }

    getState.Item1 = this.add
      .image(0, 0, "Location1")
      .setScale(0)
      .setInteractive();
    getState.Item2 = this.add
      .image(0, 0, "Location2")
      .setScale(0)
      .setInteractive();
    getState.Hand = this.add
      .image(getState.width / 3, getState.height, "Hand")
      .setScale(0);
    getState.Chooser = this.add.image(0, 0, "ChoosePlace");
    this.tweens.add({
      targets: [getState.Item1, getState.Item2],
      duration: 1000,
      ease: "Sine.easeInOut",
      yoyo: false,
      repeat: 0,
      props: { scale: 1 },
    });

    getState.aGrid.placeAtIndex(127, getState.Clothes);
    getState.aGrid.placeAtIndex(191, getState.Item1);
    getState.aGrid.placeAtIndex(183, getState.Item2);
    getState.aGrid.placeAtIndex(7, getState.Chooser);

    getState.Item1.on("pointerup", () => {
      getState.Hand.setScale(0);
      getState.Chooser.setScale(0);
      getState.Item1.setScale(0);
      getState.bgBedroom = this.add.image(400, 450, "bgBeach");
      getState.bgBedroom.setScale(1.35);
      getState.Paul = this.add.image(0, 0, "Paul2");
      getState.aGrid.placeAtIndex(119, getState.Paul);
      switch (getState.Clothes.texture.key) {
        case "LexyDressBag1Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag1Accessory1"
          );
          break;
        case "LexyDressBag1Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag1Accessory2"
          );
          break;
        case "LexyDressBag2Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag2Accessory1"
          );
          break;
        case "LexyDressBag2Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag2Accessory2"
          );
          break;
        case "LexyTopBag1Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag1Accessory1"
          );
          break;
        case "LexyTopBag1Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag1Accessory2"
          );
          break;
        case "LexyTopBag2Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag2Accessory1"
          );
          break;
        case "LexyTopBag2Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag2Accessory2"
          );
          break;
        default:
          break;
      }
      Align.scaleToGameW(getState.Paul, 1);
      getState.Clothes.setScale(1.15);
    });

    getState.Item2.on("pointerup", () => {
      getState.Hand.setScale(0);
      getState.Chooser.setScale(0);
      getState.Item1.setScale(0);
      getState.bgBedroom = this.add.image(400, 450, "bgRrestoran");
      getState.bgBedroom.setScale(1.35);
      getState.Paul = this.add.image(0, 0, "Paul2");
      getState.aGrid.placeAtIndex(119, getState.Paul);
      switch (getState.Clothes.texture.key) {
        case "LexyDressBag1Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag1Accessory1"
          );
          break;
        case "LexyDressBag1Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag1Accessory2"
          );
          break;
        case "LexyDressBag2Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag2Accessory1"
          );
          break;
        case "LexyDressBag2Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyDressBag2Accessory2"
          );
          break;
        case "LexyTopBag1Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag1Accessory1"
          );
          break;
        case "LexyTopBag1Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag1Accessory2"
          );
          break;
        case "LexyTopBag2Accessory1":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag2Accessory1"
          );
          break;
        case "LexyTopBag2Accessory2":
          getState.Clothes = this.add.image(
            -getState.width / 2,
            getState.height / 2,
            "LexyTopBag2Accessory2"
          );
          break;
        default:
          break;
      }
      Align.scaleToGameW(getState.Paul, 1);
      getState.Clothes.setScale(1.15);
      this.time.delayedCall(3000, () => {
        getState.button = this.add.image(300, 800, "button").setScale(0);
        this.tweens.add({
          targets: [getState.button],
          duration: 1000,
          ease: "Sine.easeInOut",
          yoyo: false,
          repeat: 0,
          props: { scale: 1 },
        });
      });
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
  update() {
    if (getState.Paul.x > 400) {
      getState.Paul.x -= 10;
    }
    if (getState.Clothes.x < 200) {
      getState.Clothes.x += 10;
    }
  }
}
