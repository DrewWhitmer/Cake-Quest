class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        //creating floors
        this.floor1 = this.physics.add.sprite(0, 3*game.config.height/4, 'ground').setOrigin(0,0);
        this.floor1.setImmovable(true);
        this.floor2 = this.physics.add.sprite(game.config.width/2, 3*game.config.height/4, 'ground').setOrigin(0,0);
        this.floor2.setImmovable(true);
        this.floor3 = this.physics.add.sprite(game.config.width, 3*game.config.height/4, 'ground').setOrigin(0,0);
        this.floor3.setImmovable(true);

        //creating player
        this.player = new Player(this, 50, game.config.height/2, 'mordecai', 0);
        this.physics.add.collider(this.floor1, this.player);
        this.physics.add.collider(this.floor2, this.player);
        this.physics.add.collider(this.floor3, this.player);

        //creating cake
        this.cake = this.physics.add.sprite(game.config.width*1.5, .5*game.config.height, 'cake').setOrigin(0,0);
        this.physics.add.collider(this.player, this.cake, () => {
            this.scene.restart();
        }, false, this);

        //creating log
        this.log = new Log(this, 300, game.config.height/2, 'log', 0);
        this.physics.add.collider(this.log, this.floor1);

        //creating bug
        this.bug = new Bug(this, 400, game.config.height/2, 'bug', 0, false);
        this.physics.add.collider(this.floor2, this.bug);

        //set keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        // set up camera
        this.cameras.main.setBounds(0, 0, 1280, game.config.height);
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.physics.world.setBounds(0, 0, 1280, game.config.height);
    }

    update() {
        //movement
        if (keyA.isDown) {
            this.player.body.setVelocityX(-game.settings.playerSpeed);
        } else if (keyD.isDown) {
            this.player.body.setVelocityX(game.settings.playerSpeed);
        } else {
            this.player.body.setVelocityX(0);
        }
        if (keyW.isDown && this.player.body.touching.down) {
            this.player.body.setVelocityY(-game.settings.jumpSpeed);
        }
    }
        
}