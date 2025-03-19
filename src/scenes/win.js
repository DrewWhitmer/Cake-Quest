class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
    }

    create() {
        this.background = this.add.sprite(0, 0, 'winer').setOrigin(0,0);
        this.text = this.add.text(game.config.width, game.config.height, 'Press K to restart', game.settings.text);
        this.text.setOrigin(1,1);
        this.text.postFX.addGlow(0x10820a);

        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    }

    update() {
        if(keyK.isDown) {
            this.scene.start('menuScene');
        }
    }

}