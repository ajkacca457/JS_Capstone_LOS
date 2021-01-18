import Phaser from 'phaser';
import Preload from './preload';
import Leaderboardscene from './leaderboardscene';
import Intro from './intro';
import Level1 from './level1';
import Level2 from './level2';
import Gameover from './gameover';
import './style.css';


window.score = 0;

const config = {

  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 }
    },
  },
  parent: '.container',
  dom: {
    createContainer: true,
  },

  scene: [Preload, Leaderboardscene, Intro, Level1, Level2, Gameover],

};

export default new Phaser.Game(config);
