const getState = {};

class SceneClothes extends Phaser.Scene {
  constructor() {
    super({ key: "SceneClothes" });
  }
  preload() {
    this.load.image("hand", "../image/hand.png");
    this.load.image("HomeClothes", "../image/LexyClothes/HomeClothes.png");
    this.load.image("LexyTop", "../image/LexyClothes/LexyTop.png");
    this.load.image("LexyDress", "../image/LexyClothes/LexyDress.png");
    this.load.image("bgBedroom", "../image/bg1.png");
    this.load.image("LexyDialog", "../image/Phrases/LexyFrase.png");
    this.load.image("Paul", "../image/Paul.png");
    this.load.image("PaulFrase", "../image/Phrases/PaulFrase.png");
    this.load.image("Choose", "../image/Choosers/Choose.png");
    this.load.image("Dress2", "../image/ItemChoose/Dress1.png");
    this.load.image("Dress1", "../image/ItemChoose/Dress2.png");
    this.load.image("Level1", "../image/Levels/Level1.png");
    this.load.image("Hand", "./image/hand.png");
    this.load.image("anim1", "../image/animation/fff.0000.png");
    this.load.image("anim2", "../image/animation/fff.0001.png");
    this.load.image("anim3", "../image/animation/fff.0002.png");
    this.load.image("anim4", "../image/animation/fff.0003.png");
    this.load.image("anim5", "../image/animation/fff.0004.png");
    this.load.image("anim6", "../image/animation/fff.0005.png");
    this.load.image("anim7", "../image/animation/fff.0006.png");
    this.load.image("anim8", "../image/animation/fff.0007.png");
    this.load.image("anim9", "../image/animation/fff.0008.png");
    this.load.image("anim10", "../image/animation/fff.0009.png");
    this.load.image("anim11", "../image/animation/fff.0010.png");
    this.load.image("anim12", "../image/animation/fff.0011.png");
    this.load.image("anim13", "../image/animation/fff.0012.png");
    this.load.image("anim14", "../image/animation/fff.0013.png");
    this.load.image("anim15", "../image/animation/fff.0014.png");
    this.load.image("anim16", "../image/animation/fff.0015.png");
    this.load.image("anim17", "../image/animation/fff.0016.png");
    this.load.image("anim18", "../image/animation/fff.0017.png");
    this.load.image("anim19", "../image/animation/fff.0018.png");
    this.load.image("anim20", "../image/animation/fff.0019.png");
    this.load.image("anim21", "../image/animation/fff.0020.png");
    this.load.image("anim22", "../image/animation/fff.0021.png");
    this.load.image("anim23", "../image/animation/fff.0022.png");
    this.load.image("anim24", "../image/animation/fff.0023.png");
    this.load.image("anim25", "../image/animation/fff.0024.png");
    this.load.image("anim26", "../image/animation/fff.0025.png");
    this.load.image("anim27", "../image/animation/fff.0026.png");
    this.load.image("anim28", "../image/animation/fff.0027.png");
    this.load.image("anim29", "../image/animation/fff.0028.png");
    this.load.image("anim30", "../image/animation/fff.0029.png");
    this.load.image("anim31", "../image/animation/fff.0030.png");
  }
  create() {
    getState.width = this.game.config.width;
    getState.height = this.game.config.height;

    getState.bgBedroom = this.add.image(
      getState.width / 2,
      getState.height / 2,
      "bgBedroom"
    );

    getState.bgBedroom.setTint(0x444444);
    getState.Chooser = this.add.image(0, 0, "Choose");
    getState.Clothes = this.add.image(
      -getState.width / 2,
      getState.height / 2,
      "HomeClothes"
    );
    getState.Animation = this.anims.create({
      key: "snooze",
      frames: [
        { key: "anim1" },
        { key: "anim2" },
        { key: "anim3" },
        { key: "anim4" },
        { key: "anim5" },
        { key: "anim6" },
        { key: "anim7" },
        { key: "anim8" },
        { key: "anim9" },
        { key: "anim10" },
        { key: "anim11" },
        { key: "anim12" },
        { key: "anim13" },
        { key: "anim14" },
        { key: "anim15" },
        { key: "anim16" },
        { key: "anim17" },
        { key: "anim18" },
        { key: "anim19" },
        { key: "anim20" },
        { key: "anim21" },
        { key: "anim22" },
        { key: "anim23" },
        { key: "anim24" },
        { key: "anim25" },
        { key: "anim26" },
        { key: "anim27" },
        { key: "anim28" },
        { key: "anim29" },
        { key: "anim30" },
      ],
      frameRate: 30,
      repeat: 0,
    });
    getState.LexyDialog = this.add.image(0, 0, "LexyDialog");
    getState.Paul = this.add.image(
      -getState.width / 2,
      getState.height / 2,
      "Paul"
    );
    getState.PaulFrase = this.add.image(0, 0, "PaulFrase");
    getState.Item1 = this.add.image(0, 0, "Dress1");
    getState.Item2 = this.add.image(0, 0, "Dress2");

    getState.aGrid = new AlignGrid({ scene: this, rows: 15, cols: 15 });
    Align.scaleToGameW(getState.bgBedroom, 1.2);
    Align.scaleToGameW(getState.Paul, 1);
    Align.scaleToGameW(getState.Clothes, 0.7);
    getState.aGrid.placeAtIndex(112, getState.LexyDialog);
    getState.aGrid.placeAtIndex(112, getState.PaulFrase);
    getState.aGrid.placeAtIndex(112, getState.PaulFrase);
    getState.aGrid.placeAtIndex(7, getState.Chooser);

    getState.Tweens = () => {
      this.tweens.add({
        targets: [getState.Item1, getState.Item2, getState.Clothes],
        duration: 100,
        ease: "Sine.easeInOut",
        yoyo: false,
        repeat: 0,
        props: { scale: 1 },
      });
    };
    getState.aGrid.placeAtIndex(191, getState.Item1);
    getState.aGrid.placeAtIndex(183, getState.Item2);
    getState.Chooser.setScale(0);
    getState.LexyDialog.setScale(0);
    getState.PaulFrase.setScale(0);

    getState.Item1.setInteractive().setScale(0);
    getState.Item2.setInteractive().setScale(0);

    getState.Hand = this.add
      .image(getState.width / 3, getState.height, "Hand")
      .setScale(0);

    getState.Item1.on("pointerup", () => {
      getState.Hand.setScale(0);
      getState.Chooser.setScale(0);
      getState.Level = this.add.image(0, 0, "Level1");
      getState.aGrid.placeAtIndex(7, getState.Level);
      getState.Item1.setScale(0.7);
      getState.Clothes = "LexyDress";
      this.add
        .sprite(getState.width / 2, getState.height / 3, "anim1")
        .play("snooze");
      this.add
        .sprite(getState.width / 2, 2 * (getState.height / 3), "anim1")
        .play("snooze");
      this.add
        .sprite(getState.width / 2, getState.height, "anim1")
        .play("snooze");
      this.tweens.add({
        targets: [getState.Item1],
        duration: 1000,
        ease: "Sine.easeInOut",
        yoyo: false,
        repeat: 0,
        props: { scale: 1 },
      });
      getState.aGrid.placeAtIndex(7, getState.Level);
      this.time.delayedCall(1000, () => this.scene.start("SceneBag"));
    });

    getState.Item2.on("pointerup", () => {
      getState.Hand.setScale(0);
      getState.Chooser.setScale(0);
      getState.Level = this.add.image(0, 0, "Level1");
      getState.Clothes = "LexyTop";
      this.add
        .sprite(getState.width / 2, getState.height / 3, "anim1")
        .play("snooze");
      this.add
        .sprite(getState.width / 2, 2 * (getState.height / 3), "anim1")
        .play("snooze");
      this.add
        .sprite(getState.width / 2, getState.height, "anim1")
        .play("snooze");
      getState.Item2.setScale(0.7);
      this.tweens.add({
        targets: [getState.Item2],
        duration: 1000,
        ease: "Sine.easeInOut",
        yoyo: false,
        repeat: 0,
        props: { scale: 1 },
      });
      getState.aGrid.placeAtIndex(7, getState.Level);
      this.time.delayedCall(1000, () => this.scene.start("SceneBag"));
    });

    console.log(getState.Hand);
  }

  update() {
    if (getState.Paul.x < getState.width / 2) {
      getState.Paul.x += 10;
      if (getState.Paul.x > 0)
        getState.PaulFrase.setScale(getState.Paul.x / 1000);
    }

    this.time.delayedCall(5000, () => {
      if (getState.Paul.x < getState.width + getState.width) {
        getState.Paul.x += 10;
        getState.PaulFrase.setScale(0);
        if (getState.Clothes.x < getState.width / 2) {
          getState.Clothes.x += 10;
          if (getState.Clothes.x > 0)
            getState.LexyDialog.setScale(getState.Clothes.x / 1000);
        }

        this.time.delayedCall(5000, () => {
          getState.LexyDialog.setScale(0);
          getState.Chooser.setScale(1);
          getState.bgBedroom.clearTint();
          getState.Tweens();
          getState.aGrid.placeAtIndex(127, getState.Clothes);
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
        });
      }
    });
  }
}
