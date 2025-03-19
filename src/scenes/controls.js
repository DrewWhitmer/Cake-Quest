class Controls extends Phaser.Scene {
    constructor() {
        super("controlScene");
    }

    create() {
        this.background = this.add.sprite(0, 0, 'controls').setOrigin(0,0);
        this.text = this.add.text(game.config.width/2, game.config.height/2, 'A/D for movement\nW to jump\nJ to use fire', game.settings.text);
        this.text.setOrigin(0.5,0.5);
        this.text.postFX.addGlow(0x10820a);
        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);


        
    }

    update() {
        if(keyK.isDown) {
            this.scene.start('characterScene');
            this.sound.play('start');
        }
    }
}