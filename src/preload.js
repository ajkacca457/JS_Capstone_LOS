import Phaser from 'phaser';
import Levell from './assets/Sceneassets/Level1.json';
import Level2 from './assets/Sceneassets/Level2.json';

import Forrest from './assets/Sceneassets/Forrest.png';
import Dessert from './assets/Sceneassets/Dessert.png';
import Darklev from './assets/Sceneassets/main_lev_build_1.png';


import Sohaimg from './assets/charachter/soha.png';
import Soha from './assets/charachter/soha.json';

import Sohabigimg from './assets/charachter/sohabig.png';
import Sohabig from './assets/charachter/sohabig.json';

import Dino from './assets/charachter/dino.png';
import Zombie from './assets/charachter/zombie.png';

import BackgroundD from './assets/Backgrounds/backgroundDesert.png';
import BackgroundC from './assets/Backgrounds/backgroundCastles.png';

import Gems from './assets/Others/Gems.png';
import Keys from './assets/Others/key.png';
import Trophy from './assets/Others/trophy.png';

import Logo from './assets/Others/logo.png';
import Playbtn from './assets/Others/play.png';
import Leaderboard from './assets/Others/leaderboard.png';
import Restart from './assets/Others/restart.png';
import Gameover from './assets/Others/gameover.png';
import Back from './assets/Others/back.png';
import Credit from './assets/Others/credit.png';
import Scroll from './assets/Others/scroll.png';


import Jump from './assets/Sounds/jump_10.wav';
import Collect from './assets/Sounds/coin.wav';
import Death from './assets/Sounds/death.mp3';
import Start from './assets/Sounds/start.wav';
import Main from './assets/Sounds/main.wav';
import Intro from './assets/Sounds/intro.wav';
import Hover from './assets/Sounds/hover.wav';

export default class Preload extends Phaser.Scene {
  constructor() {
    super('preload');
  }

  preload() {
    this.load.tilemapTiledJSON('level1', Levell);
    this.load.tilemapTiledJSON('level2', Level2);
    this.load.image('forrest', Forrest);
    this.load.image('dessert', Dessert);
    this.load.image('darklev', Darklev);
    this.load.image('backgroundd', BackgroundD);
    this.load.image('backgroundc', BackgroundC);
    this.load.atlas('soha', Sohaimg, Soha);
    this.load.atlas('sohabig', Sohabigimg, Sohabig);
    this.load.image('gems', Gems);
    this.load.image('keys', Keys);
    this.load.image('trophy', Trophy);
    this.load.image('dino', Dino);
    this.load.image('zombie', Zombie);

    this.load.image('logo', Logo);
    this.load.image('play', Playbtn);
    this.load.image('leaderboard', Leaderboard);
    this.load.image('restart', Restart);
    this.load.image('gameover', Gameover);
    this.load.image('back', Back);
    this.load.image('credit', Credit);
    this.load.image('scroll', Scroll);

    this.load.audio('jump', Jump);
    this.load.audio('collect', Collect);
    this.load.audio('death', Death);
    this.load.audio('start', Start);
    this.load.audio('main', Main);
    this.load.audio('intro', Intro);
    this.load.audio('hover', Hover);
  }


  create() {
    this.scene.start('intro');
  }
}
