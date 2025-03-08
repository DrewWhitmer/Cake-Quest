class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        //load images
        this.load.image('mordecai', './assets/images/Mordecai.png');
        this.load.image('ground', './assets/images/Ground.png');
        this.load.image('cake', './assets/images/Cake.png');
        this.load.image('log', './assets/images/Log.png');
        this.load.image('bug', './assets/images/Bug.png');
        this.load.image('fire', './assets/images/Fire.png');
        this.load.image('menu', './assets/images/Menu.png');
        this.load.image('winer', './assets/images/Winer.png');

        //load sfx (made using jfxr)
        this.load.audio('bugDeath', './assets/sounds/BugDeath.wav');
        this.load.audio('jump', './assets/sounds/Jump.wav');
        this.load.audio('start', './assets/sounds/Start.wav');
        this.load.audio('win', './assets/sounds/Win.wav');
    }

    create() {
        this.background = this.add.sprite(0, 0, 'menu').setOrigin(0,0);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        //settings
        game.settings = {
            playerSpeed: 100,
            gravity: 200,
            jumpSpeed: 150,
            logSpeed: 100,
            logRotateSpeed: 400,
            bugSpeed: 75,
        }

        
    }

    update() {
        if(keyJ.isDown) {
            this.scene.start('playScene');
            this.sound.play('start');
        }
    }
}