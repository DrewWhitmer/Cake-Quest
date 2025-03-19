class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, type) {
        if (type != true) {
            texture = 'rigby'
        }
        super(scene, x, y, texture, frame, type);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.texture = texture;
        this.body.setGravityY(game.settings.gravity);
        if (type == true) {
            this.body.setSize(32, 64, true);
        } else {
            this.body.setSize(32, 32, true);
        }
        
        this.body.setCollideWorldBounds(true);
        keyJ = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        //create animations
        this.anims.create({
            key: 'walk',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers(texture,{
                start: 0,
                end: 3,
            },
            
        ),
        })
    }

    update() {
        //movement
        if (keyA.isDown) {
            this.body.setVelocityX(-game.settings.playerSpeed);
            if(this.body.velocity.y == 0 && !keyW.isDown) {
                this.anims.play('walk',true);
            }
            this.scene.fire.x = this.x - 32;
            this.setFlipX(true);
        } else if (keyD.isDown) {
            this.body.setVelocityX(game.settings.playerSpeed);
            if(this.body.velocity.y == 0 && !keyW.isDown) {
                this.anims.play('walk',true);
            }
            this.scene.fire.x = this.x + 16;
            this.resetFlip();
        } else {
            this.body.setVelocityX(0);
            this.anims.stop();
            this.resetFlip();
        }
        if (keyW.isDown && this.body.velocity.y == 0) {
            this.body.setVelocityY(-game.settings.jumpSpeed);
            this.anims.stop();
            this.setTexture(this.texture, 5);
            this.scene.sound.play('jump');
        }

        //fire!!!
        if(keyJ.isDown) {
            this.anims.stop();
            this.setTexture(this.texture, 4);
            this.scene.fire.y = this.y - 10;
            this.scene.fire.alpha = 1;
        } else {
            this.scene.fire.alpha = 0;
        }
    }
}