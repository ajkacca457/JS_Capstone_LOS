import Phaser from 'phaser';

export default class Intro extends Phaser.Scene {

  constructor() {
    super('intro');
  }


preload(){

}

create(){

const mainbackground=this.add.image(420,270,"los").setScale(0.6);
mainbackground.setOrigin(.5,.5);
const mainlogo=this.add.image(540,80,"logo");
mainlogo.setInteractive();
mainlogo.on('pointerdown', this.changeScene,this);


const startButton = this.add.text(450, 200, 'Start Game', {
  fill: 'white',
  backgroundColor:"#A0522D",
  padding:{
    left: 15,
    right: 15,
    top: 10,
    bottom:10,
  },
 });

  startButton.setInteractive();

  startButton.on('pointerdown', this.changeScene,this);

}

changeScene(){
this.scene.start('level1');
}

update(){}


}
