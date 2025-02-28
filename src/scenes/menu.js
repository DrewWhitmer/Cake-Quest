class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        //load images
        this.load.image('mordecai', './assets/images/Mordecai.png');
        this.load.image('ground', './assets/images/Ground.png');
    }

    create() {

        //settings
        game.settings = {
            playerSpeed: 400,
            playerGravity: 100,
        }

        this.scene.start('playScene');
    }

    update() {
        
    }
}