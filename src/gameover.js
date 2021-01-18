import Phaser from 'phaser';
import { postScores, url } from './leaderboardapi';

export default class Gameover extends Phaser.Scene {
  charachter

  score

  name

  message

  constructor() {
    super('gameover');
  }

  create(data) {
    this.score = data.score;
    this.message = data.message;

    this.add.image(300, 300, 'backgroundc');
    this.add.image(400, 100, 'logo').setScale(0.8);
    this.charachter = this.add.sprite(200, 350, 'sohabig', 'Idle-1.png').setScale(0.6);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNames('sohabig', {
        start: 1, end: 10, prefix: 'Idle-', suffix: '.png',
      }),
      repeat: -1,
      frameRate: 5,
    });

    this.charachter.anims.play('idle');

    this.add.text(300, 220, `Your Score : ${this.score}`, {
      fontSize: '25px',
      fill: ':#704F32',
      fontFamily: 'Bree Serif',
      align: 'center',
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    });


    this.add.text(300, 275, this.message ? `${this.message}` : 'You didnt cleared both level.Try again', {
      fontSize: '20px',
      fill: ':#704F32',
      fontFamily: 'Bree Serif',
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    });


    this.add.image(400, 180, 'gameover').setScale(0.5);
    const restartButton = this.add.image(450, 475, 'restart').setScale(0.4);

    restartButton.setInteractive();
    restartButton.on('pointerdown', this.changeScene, this);

    const form = document.createElement('form');
    form.innerHTML = `
     <input type="text" name="name" placeholder="Enter your name save score" id="textinfo" required minLength="3" maxLength="10" autofocus/>
     <button type="submit" id="subbtn">Submit</button>
   `;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('#textinfo');
      this.name = input.value;
      postScores(this.name, this.score, url);
      this.scene.start('leaderboard');
    });

    this.add.dom(450, 380, form);
  }

  changeScene() {
    this.scene.start('level1');
    this.sound.play('start');
  }
}
