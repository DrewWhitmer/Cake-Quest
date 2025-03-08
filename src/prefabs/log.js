class Log extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setOrigin(0.5);
        this.body.setSize(16,16);
        this.body.setGravityY(game.settings.gravity);
        this.body.setVelocityX(-game.settings.logSpeed);
        this.body.setAngularVelocity(game.settings.logRotateSpeed);

        //collider with player
        this.scene.physics.add.collider(this.scene.player, this, () => {
            this.scene.scene.restart();
        }, false, this);
    }

}