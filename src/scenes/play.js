class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(type) {
        //add tilemap
        const map = this.add.tilemap("tilemap");
        const tileset = map.addTilesetImage("CakeQuestSet",'tilesetSheet');
        const backgroundLayer = map.createLayer("Background", tileset);
        const groundLayer = map.createLayer("Ground", tileset);

        groundLayer.setCollisionByProperty({
            collides: true,
        })
        groundLayer.forEachTile((tile) => {
            tile.collideLeft = false;
            tile.collideRight = false;
            tile.collideDown = false;
            }
        );

        //set background color (temp)
        this.cameras.main.setBackgroundColor("#005599");

        //creating player
        const playerSpawn = map.findObject("Objects", obj => obj.name === "player");
        this.player = new Player(this, playerSpawn.x, playerSpawn.y, 'mordecai', 0, type);
        this.physics.add.collider(this.player, groundLayer);

        //resets the game if the player falls
        this.physics.world.on('worldbounds', (body, up, down, left, right) => {
            if(up == true) {
                this.music.stop();
                this.scene.restart();
            }

        })

        //creating fire
        this.fire = this.physics.add.sprite(this.player.x, this.player.y + 32, 'fire').setOrigin(0,0)
        this.fire.alpha = 0;

        //creating cake
        const cakeSpawn = map.findObject("Objects", obj => obj.name === "cake");
        this.cake = this.physics.add.sprite(cakeSpawn.x, cakeSpawn.y, 'cake').setOrigin(0,0);
        this.physics.add.collider(this.player, this.cake, () => {
            this.music.stop();
            this.sound.play('win');
            this.scene.start('winScene');
        }, false, this);

        //creating log
        const logSpawn1 = map.findObject("Objects", obj => obj.name === "log1");
        const logSpawn2 = map.findObject("Objects", obj => obj.name === "log2");
        this.log1 = new Log(this, logSpawn1.x, logSpawn1.y, 'log', 0);
        this.log2 = new Log(this, logSpawn2.x, logSpawn2.y, 'log', 0);
        this.logs = this.add.group([this.log1,this.log2]);
        this.physics.add.collider(this.logs, groundLayer);


        //creating bug
        const bugSpawn1 = map.findObject("Objects", obj => obj.name === "bug1");
        const bugSpawn2 = map.findObject("Objects", obj => obj.name === "bug2");
        this.bug1 = new Bug(this, bugSpawn1.x, bugSpawn1.y, 'bug', 0);
        this.bug2 = new Bug(this, bugSpawn2.x, bugSpawn2.y, 'bug', 0);
        this.bugs = this.add.group([this.bug1,this.bug2]);
        this.physics.add.collider(this.bugs, groundLayer);

        //set keys
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        // set up camera
        this.cameras.main.setBounds(0, -250, 1000, game.config.height);
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.physics.world.setBounds(0, -250, 1000, game.config.height);

        //set up music
        this.music = this.sound.add('playMusic');
        this.music.loop = true;
        this.music.play();
    }

    update() {
        this.player.update();
        if(this.player.getBottomRight().y >= 230) {
            this.music.stop();
            this.scene.restart();
        }
    }
        
}