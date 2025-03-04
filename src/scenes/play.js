class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        //creating floor
        this.floor = this.physics.add.sprite(0, 3*game.config.height/4, 'ground').setOrigin(0,0);
        this.floor.setImmovable(true);
        //creating player
        this.player = new Player(this, 50, game.config.height/2, 'mordecai', 0);
        this.physics.add.collider(this.floor, this.player);
        //creating cake
        this.cake = this.physics.add.sprite(.5*game.config.width, .5*game.config.height, 'cake').setOrigin(0,0);
        this.physics.add.collider(this.player, this.cake, () => {
            this.scene.restart();
        }, false, this);
        //creating log
        this.log = new Log(this, 200, game.config.height/2, 'log', 0);
        this.physics.add.collider(this.player, this.log, () => {
            this.scene.restart();
        }, false, this);

        //set keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
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