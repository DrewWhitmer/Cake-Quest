class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        this.floor = this.physics.add.sprite(0, 3*game.config.height/4, 'ground').setOrigin(0,0);
        this.floor.setImmovable(true);
        this.player = new Player(this, 50, game.config.height/2, 'mordecai', 0);
        this.physics.add.collider(this.floor, this.player);

        //set keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update() {
        //movement
        this.moving = false;
        if (keyA.isDown) {
            console.log("a;lsdkfja;sld");
            this.player.body.setVelocityX(-game.settings.playerSpeed);
            this.moving = true;
        }
        if (keyD.isDown) {
            this.player.body.setVelocityX(game.settings.playerSpeed);
            this.moving = true;
        }
        if(!this.moving) {
            this.player.body.setVelocityX(0);
        }
    }
        
}