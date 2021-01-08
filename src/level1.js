import Phaser from "phaser";

let Score=0


export default class Level1 extends Phaser.Scene  {

player
cursors
background
platforms
text

  constructor() {
    super("level1")
    this.cursors = undefined
  }

preload(){
}
