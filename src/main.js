'use strict'

// name: Drew Whitmer
// hours: 1



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play,  ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    backgroundColor: '#FFFFFF',
    pixelArt: true,
}

let game = new Phaser.Game(config);

//reserve keyboard bindings
let keyW, keyA, keyD;

//UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;