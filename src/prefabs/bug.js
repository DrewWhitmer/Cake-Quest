class Bug extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, facingRight) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.facingRight = facingRight;
        if (facingRight) {
            this.flipX;
            //this.body.setVelocityX(game.settings.bugSpeed);
        } else {
            //this.body.setVelocityX(-game.settings.bugSpeed);
        }
        this.body.setGravityY(game.settings.gravity);
        
        //collider with player
        this.scene.physics.add.collider(this.scene.player, this, () => {
            this.scene.scene.restart();
        }, false, this);
    }
}