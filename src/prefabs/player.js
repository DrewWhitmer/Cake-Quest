class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setGravityY(20);
        this.body.setCollideWorldBounds(true);
        
        
        
    }

    update() {
        
    }
}