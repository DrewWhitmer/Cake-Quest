class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
    }

    create() {
        this.background = this.add.sprite(0, 0, 'winer').setOrigin(0,0);
    }

}