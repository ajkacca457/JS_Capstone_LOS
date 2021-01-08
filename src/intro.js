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
const music=this.sound.add("main");

music.play({volume: 0.3});


const startButton = this.add.text(470, 200, 'Start Game', {
  fill: 'white',
  backgroundColor:"#A0522D",
  padding:{
    left: 15,
    right: 15,
    top: 10,
    bottom:10,
  },
 });

 const leadrboardButton = this.add.text(460, 300, 'Leader Board', {
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
  leadrboardButton.setInteractive();
  leadrboardButton.on('pointerdown', this.getScore,this);

}

changeScene(){
this.scene.start('level1');
}

getScore(){
  console.log("hello")
}

update(){}


}
