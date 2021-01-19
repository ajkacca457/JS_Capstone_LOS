import Phaser from 'phaser';


export default class Level2 extends Phaser.Scene {
player

score

constructor() {
  super('level2');
}

preload() {
  this.cursors = this.input.keyboard.createCursorKeys();
}


create(data) {
  this.score = data.score;

  this.add.tileSprite(0, -200, 1600, 1000, 'backgroundd').setOrigin(0, 0);

  const map = this.make.tilemap({ key: 'level2' });
  const forrest = map.addTilesetImage('Forrest', 'forrest');
  const dessert = map.addTilesetImage('Dessert', 'dessert');
  const darklev = map.addTilesetImage('main_lev_build_1', 'darklev');
  const gemslayer = map.getObjectLayer('gems');
  const trophylayer = map.getObjectLayer('trophy');

  const platforms = map.createLayer('Platforms', dessert).setCollisionByProperty({ collide: true });
  map.createLayer('Environment', [forrest, dessert]);
  const sand = map.createLayer('Sand', dessert).setCollisionByProperty({ collide: true });
  const spikes = map.createLayer('Traps', darklev).setCollisionByProperty({ collide: true });
  const ground = map.createLayer('Ground', [forrest, dessert]).setCollisionByProperty({ collide: true });
  const gems = this.createGems(gemslayer);
  const trophys = this.createTrophy(trophylayer);


  this.sound.add('jump');
  this.sound.add('collect');
  this.sound.add('death');


  const zombie1 = this.physics.add.image(560, 200, 'zombie').setScale(0.8);
  zombie1.body.setSize(zombie1.width * 0.5, zombie1.height * 1);
  this.physics.add.collider(zombie1, ground);
  this.physics.add.collider(zombie1, platforms);


  const zombie2 = this.physics.add.image(1020, 200, 'zombie').setScale(0.8);
  zombie2.body.setSize(zombie2.width * 0.5, zombie2.height * 1);
  this.physics.add.collider(zombie2, ground);
  this.physics.add.collider(zombie2, platforms);

  const zombie3 = this.physics.add.image(1460, 400, 'zombie').setScale(0.8);
  zombie3.body.setSize(zombie3.width * 0.5, zombie3.height * 1);
  this.physics.add.collider(zombie3, ground);
  this.physics.add.collider(zombie3, platforms);

  this.tweens.add({
    targets: [zombie1],
    x: 600,
    duration: 1500,
    ease: 'easeIn',
    flipX: true,
    yoyo: true,
    repeat: -1,
  });

  this.tweens.add({
    targets: [zombie2],
    x: 1080,
    duration: 2000,
    ease: 'easeIn',
    flipX: true,
    yoyo: true,
    repeat: -1,
  });

  this.tweens.add({
    targets: [zombie3],
    x: 1580,
    duration: 3000,
    ease: 'easeIn',
    flipX: true,
    yoyo: true,
    repeat: -1,
  });


  this.text = this.createText();
  this.player = this.physics.add.sprite(30, 380, 'soha', 'Idle-1.png');
  this.player.setScale(0.8);
  this.player.body.setSize(this.player.width * 0.4, this.player.height * 0.8);
  this.player.body.setGravityY(500);
  this.player.setCollideWorldBounds(true);
  this.physics.add.collider(this.player, ground);
  this.physics.add.collider(this.player, platforms);
  this.cameras.main.startFollow(this.player);
  this.physics.world.setBounds(0, 0, 1600, 600);
  this.cameras.main.setBounds(0, 0, 1600, 600);

  this.physics.add.overlap(this.player, gems, this.collectCoins, null, this);
  this.physics.add.collider(this.player, spikes, this.gameOver, null, this);
  this.physics.add.collider(this.player, sand, this.gameOver, null, this);
  this.physics.add.overlap(this.player, trophys, this.congrats, null, this);
  this.physics.add.overlap(this.player, zombie1, this.gameOver, null, this);
  this.physics.add.overlap(this.player, zombie2, this.gameOver, null, this);
  this.physics.add.overlap(this.player, zombie3, this.gameOver, null, this);


  this.anims.create({
    key: 'idle-right',
    frames: this.anims.generateFrameNames('soha', {
      start: 1, end: 10, prefix: 'Idle-', suffix: '.png',
    }),
    repeat: -1,
    frameRate: 15,
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNames('soha', {
      start: 1, end: 8, prefix: 'Run-', suffix: '.png',
    }),
    repeat: -1,
    frameRate: 15,
  });

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNames('soha', {
      start: 1, end: 8, prefix: 'Run-r-', suffix: '.png',
    }),
    repeat: -1,
    frameRate: 15,
  });


  this.anims.create({
    key: 'shoot-right',
    frames: this.anims.generateFrameNames('soha', {
      start: 1, end: 3, prefix: 'Shoot-', suffix: '.png',
    }),
    repeat: -1,
    frameRate: 10,
  });

  this.anims.create({
    key: 'shoot-left',
    frames: this.anims.generateFrameNames('soha', {
      start: 1, end: 3, prefix: 'Shoot-r-', suffix: '.png',
    }),
    repeat: -1,
    frameRate: 10,
  });
}


createGems(gemlayer) {
  const gems = this.physics.add.staticGroup();
  gemlayer.objects.forEach((item) => {
    gems.get(item.x, item.y, 'gems');
  });
  return gems;
}

createTrophy(trophylayer) {
  const trophys = this.physics.add.staticGroup();
  trophylayer.objects.forEach((item) => {
    trophys.get(item.x, item.y, 'trophy');
  });
  return trophys;
}

createText() {
  const Text = this.add.text(10, 10, `Score:${this.score}`, {
    fontSize: '15px',
    fill: '#3377AA',
    backgroundColor: 'white',
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },

  });
  Text.setScrollFactor(0);
  return Text;
}

collectCoins(player, gem) {
  gem.destroy();
  this.sound.play('collect');
  this.score += 100;
  this.text.setText(`Score: ${this.score}`);
}

gameOver() {
  this.physics.pause();
  this.player.setTint(0xdb7093);
  this.sound.play('death');
  this.time.addEvent({ delay: 100, callback: this.changeScene, callbackScope: this });
}

changeScene() {
  this.scene.start('gameover', { score: this.score });
}

congrats() {
  this.scene.start('gameover', { message: 'congrats you have cleared both the level', score: this.score });
}

update() {
  const onfloor = this.player.body.onFloor();

  if (this.cursors.left.isDown) {
    this.player.setVelocityX(-160);
    this.player.anims.play('left', true);
  } else if (this.cursors.right.isDown) {
    this.player.setVelocityX(160);
    this.player.anims.play('right', true);
  } else {
    this.player.setVelocityX(0);
    this.player.anims.play('idle-right');
  }

  if (this.cursors.space.isDown && onfloor) {
    this.player.setVelocityY(-520);
    this.sound.play('jump');
  }
}
}
