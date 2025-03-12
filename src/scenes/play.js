class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        //add tilemap
        const map = this.add.tilemap("tilemap");
        const tileset = map.addTilesetImage("CakeQuestSet",'tilesetSheet');
        const backgroundLayer = map.createLayer("Background", tileset);
        const groundLayer = map.createLayer("Ground", tileset);

        groundLayer.setCollisionByProperty({
            collides: true,
        })
        groundLayer.forEachTile(tile => {
            if (tile.index === 1) {
            tile.collideLeft = false;
            tile.collideRight = false;
            tile.collideDown = false;
            }
        });

        //set background color (temp)
        this.cameras.main.setBackgroundColor("#005599");

        //creating player
        const playerSpawn = map.findObject("Objects", obj => obj.name === "player")
        this.player = new Player(this, playerSpawn.x, playerSpawn.y, 'mordecai', 0);
        this.physics.add.collider(this.player, groundLayer);

        //creating fire
        this.fire = this.physics.add.sprite(this.player.x, this.player.y + 32, 'fire').setOrigin(0,0)
        this.fire.alpha = 0;

        //creating cake
        this.cake = this.physics.add.sprite(game.config.width*1.5, .5*game.config.height, 'cake').setOrigin(0,0);
        this.physics.add.collider(this.player, this.cake, () => {
            this.sound.play('win');
            this.scene.start('winScene');
        }, false, this);

        //creating log
        this.log = new Log(this, 300, game.config.height/2, 'log', 0);

        //creating bug
        this.bug = new Bug(this, 400, game.config.height/2, 'bug', 0, false);

        //set keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

        // set up camera
        this.cameras.main.setBounds(0, 0, 1280, game.config.height);
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.physics.world.setBounds(0, 0, 1280, game.config.height);

        //instruction text
        document.getElementById('description').innerHTML = 'A: move left, D: move right, W: jump, K: attack';
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
        if (keyW.isDown && this.player.body.touching.groundLayer) {
            this.player.body.setVelocityY(-game.settings.jumpSpeed);
            this.sound.play('jump');
        }

        //fire!!!
        if(keyK.isDown) {
            this.fire.x = this.player.x + 16;
            this.fire.y = this.player.y - 16;
            this.fire.alpha = 1;
        } else {
            this.fire.alpha = 0;
        }
    }
        
}