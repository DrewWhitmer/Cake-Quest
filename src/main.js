'use strict'

// name: Drew Whitmer
// hours: 20
// phaser components: tilemaps, physics, cameras, animation, text, FX



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play, Win, CharacterSelect, Controls],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    backgroundColor: '#FFFFFF',
    pixelArt: true,
}

let game = new Phaser.Game(config);

//reserve keyboard bindings
let keyW, keyA, keyS, keyD, keyJ, keyK;

//UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;