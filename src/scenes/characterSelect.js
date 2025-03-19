class CharacterSelect extends Phaser.Scene {
    constructor() {
        super("characterScene");
    }

    create() {
        this.background = this.add.sprite(0, 0, 'chooseHero').setOrigin(0,0);
        this.mordecai = this.add.sprite(game.config.width/3, game.config.height/2,'mordecai', 0).setScale(2);
        this.rigby = this.add.sprite(2*game.config.width/3, game.config.height/2,'rigby', 0).setScale(2);
        this.text = this.add.text(game.config.width/2, 3*game.config.height/4, 'Press A for Mordecai\nPress D for Rigby\nPress S for controls', game.settings.text);
        this.text.setOrigin(0.5,0.5);
        this.text.postFX.addGlow(0x10820a);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        if(keyA.isDown) {
            this.scene.start('playScene', true);
            this.sound.play('start');
        }
        if(keyD.isDown) {
            this.scene.start('playScene');
            this.sound.play('start');
        }
        if(keyS.isDown) {
            this.scene.start('controlScene', false);
            this.sound.play('start');
        }
    }
}