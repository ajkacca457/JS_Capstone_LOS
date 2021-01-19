import Phaser from 'phaser';

export default class Intro extends Phaser.Scene {
  charachter

  constructor() {
    super('intro');
  }

  create() {
    this.sound.add('hover');

    this.add.image(300, 300, 'backgroundc');
    this.add.image(500, 100, 'logo');

    this.charachter = this.add.sprite(220, 320, 'sohabig', 'Idle-1.png').setScale(0.8);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNames('sohabig', {
        start: 1, end: 10, prefix: 'Idle-', suffix: '.png',
      }),
      repeat: -1,
      frameRate: 5,
    });

    this.charachter.anims.play('idle');

    const startButton = this.add.image(500, 250, 'play').setScale(0.8);
    const leadrboardButton = this.add.image(500, 375, 'leaderboard').setScale(0.8);
    this.add.image(650, 550, 'credit').setScale(0.8);

    startButton.setInteractive();
    startButton.on('pointerdown', this.changeScene, this);
    startButton.on('pointerover', this.playSound, this);

    leadrboardButton.setInteractive();
    leadrboardButton.on('pointerdown', this.leaderboardscene, this);
    leadrboardButton.on('pointerover', this.playSound, this);
  }

  changeScene() {
    this.scene.start('level1', { name: this.name });
    this.sound.play('start', { volume: 0.2 });
    if (this.sound.get('main')) {
      return;
    }
    this.sound.add('main', { loop: true, volume: 0.1 }).play();
  }

  leaderboardscene() {
    this.sound.play('start', { volume: 0.2 });
    this.scene.start('leaderboard');
  }

  playSound() {
    this.sound.play('hover', { volume: 0.2 });
  }
}
