import Phaser from 'phaser';

export default class Gameover extends Phaser.Scene {
  constructor() {
    super('gameover');
  }


  create() {
    const mainbackground = this.add.image(400, 270, 'bg').setScale(0.8);
    mainbackground.setOrigin(0.5, 0.5);
    this.add.image(375, 80, 'logo');

    this.add.text(290, 200, 'Game Over', {
      fill: 'white',
      fontSize: '30px',
      backgroundColor: 'red',
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });


    const restartButton = this.add.text(310, 300, 'Restart Game', {
      fill: 'white',
      backgroundColor: '#A0522D',
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });

    restartButton.setInteractive();
    restartButton.on('pointerdown', this.changeScene, this);
  }

  changeScene() {
    this.scene.start('level1');
    this.sound.play('start');
  }
}
