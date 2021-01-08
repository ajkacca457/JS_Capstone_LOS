import Phaser from 'phaser';
import Preload from './preload';
import Intro from './intro';
import Level1 from './level1';
import Level2 from './level2';
import Gameover from './gameover';
import './style.css';

const config = {

  type: Phaser.AUTO,
  width: 800,
  height: 500,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [Preload, Intro, Level1, Level2,Gameover],
};

export default new Phaser.Game(config);
