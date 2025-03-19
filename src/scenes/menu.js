class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        //load images
        this.load.image('cake', './assets/images/Cake.png');
        this.load.image('log', './assets/images/Log.png');
        this.load.image('bug', './assets/images/Bug.png');
        this.load.image('fire', './assets/images/Fire.png');
        this.load.image('menu', './assets/images/Menu.png');
        this.load.image('chooseHero', './assets/images/ChooseHero.png');
        this.load.image('controls', './assets/images/Controls.png');
        this.load.image('menuRigby', './assets/images/MenuRigby.png');
        this.load.image('winer', './assets/images/Winer.png');
        this.load.spritesheet('mordecai', './assets/images/Mordecai.png', {
            frameWidth: 64,
            frameHeight: 64,
        });
        this.load.spritesheet('rigby', './assets/images/Rigby.png', {
            frameWidth: 64,
            frameHeight: 32,
        });
        this.load.spritesheet('tilesetSheet', './assets/tileset/TilesetCakeQuest.png', {
            frameWidth: 16,
            frameHeight: 16,
        });

        //load font
        this.load.font('pixel', './assets/fonts/Tiny5-Regular.ttf', 'truetype');

        //load audio (sfx made using jfxr, song made with boscaceoil-blue)
        this.load.audio('bugDeath', './assets/sounds/BugDeath.wav');
        this.load.audio('jump', './assets/sounds/Jump.wav');
        this.load.audio('start', './assets/sounds/Start.wav');
        this.load.audio('win', './assets/sounds/Win.wav');
        this.load.audio('playMusic', './assets/sounds/simpleSong.wav');

        //load tilemap
        this.load.tilemapTiledJSON("tilemap", "./assets/tileset/CakeQuestMap.json");
    }

    create() {
        this.background = this.add.sprite(0, 0, 'menu').setOrigin(0,0);
        this.rigby = this.add.sprite(-75, 0, 'menuRigby').setOrigin(0,0); 
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        //settings
        game.settings = {
            playerSpeed: 100,
            gravity: 200,
            jumpSpeed: 150,
            logSpeed: 100,
            logRotateSpeed: 400,
            text: {
                fontFamily: 'pixel',
                fontSize: 25,
                align: 'center',
                color: '#0cf700',
            },
        }
        this.text = this.add.text(game.config.width, game.config.height, 'game by Drew Whitmer', game.settings.text);
        this.text.setOrigin(1,1);
        this.text.postFX.addGlow(0x10820a);

        
    }

    update() {
        if(keyJ.isDown) {
            this.scene.start('characterScene');
            this.sound.play('start');
        }
    }
}