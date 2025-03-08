class Bug extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, facingRight) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setSize(64, 32);
        this.body.setOffset(0, 32);
        this.facingRight = facingRight;

        //flips if sprite is facing the wrong direction
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

        //collider with fire
        this.scene.physics.add.collider(this.scene.fire, this, () => {
            if(this.scene.fire.alpha != 0) {
                this.scene.sound.play('bugDeath');
                this.destroy();
            }}, false, this);
        }
}