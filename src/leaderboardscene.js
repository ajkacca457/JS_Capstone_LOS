import Phaser from 'phaser';
import { url, getScores } from './leaderboardapi';

export default class Leaderboardscene extends Phaser.Scene {
  constructor() {
    super('leaderboard');
  }

  create() {
    this.add.image(300, 300, 'backgroundc');
    this.add.image(400, 100, 'logo').setScale(0.8);

    this.add.image(400, 175, 'leaderboard').setScale(0.5);
    const backButton = this.add.image(740, 550, 'back').setScale(0.4);

    backButton.setInteractive();
    backButton.on('pointerdown', this.changeScene, this);

    this.add.image(400, 380, 'scroll').setScale(1.2);

    getScores(url)
      .then((data) => {
        console.log(data);
        const arr = [];
        data.result.forEach((item) => arr.push({ name: item.user, score: item.score }));
        const Highscores = arr.sort((a, b) => b.score - a.score).slice(1, 6);
        let gap = 0;
        Highscores.forEach((item) => {
          this.add.text(300, 260 + gap, `${item.name}   ..................    ${item.score}`, {
            fontSize: '17px',
            fill: 'black',
            width: 400,
            fontFamily: 'Bree Serif',
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          });
          gap += 50;
        });
      }).catch(() => {
        this.add.text(280, 360, 'Network Error.Try again later.', {
          fontSize: '17px',
          fill: 'black',
          fontFamily: 'Bree Serif',
        });
      });
  }

  changeScene() {
    this.scene.start('intro');
  }
}
