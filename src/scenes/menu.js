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
        this.load.image('bug', './assets/images/Bug.png')
    }

    create() {

        //settings
        game.settings = {
            playerSpeed: 100,
            gravity: 200,
            jumpSpeed: 150,
            logSpeed: 100,
            logRotateSpeed: 400,
            bugSpeed: 75,
        }

        this.scene.start('playScene');
    }

    update() {
        
    }
}