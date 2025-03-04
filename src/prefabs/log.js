class Log extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setGravityY(game.settings.gravity);
        this.body.setVelocityX(-game.settings.logSpeed);
        this.body.setCollideWorldBounds(true);
        this.body.setAngularVelocity(game.settings.logRotateSpeed);
        
        
    }
}