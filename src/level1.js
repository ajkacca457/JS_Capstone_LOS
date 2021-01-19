import Phaser from 'phaser';

export default class Level1 extends Phaser.Scene {
player

text

score

constructor() {
  super('level1');
}

preload() {
  this.cursors = this.input.keyboard.createCursorKeys();
}


create() {
  this.add.tileSprite(0, -200, 1600, 1000, 'backgroundc').setOrigin(0, 0);

  const map = this.make.tilemap({ key: 'level1' });
  const forrest = map.addTilesetImage('Forrest', 'forrest');
  const dessert = map.addTilesetImage('Dessert', 'dessert');
  const darklev = map.addTilesetImage('main_lev_build_1', 'darklev');
  const gemslayer = map.getObjectLayer('gems');
  const keylayer = map.getObjectLayer('key');

  const rivers = map.createLayer('River', forrest).setCollisionByProperty({ collide: true });
  map.createLayer('Trees', [forrest, dessert, darklev]);
  const platforms = map.createLayer('Platforms', forrest).setCollisionByProperty({ collide: true });
  const spikes = map.createLayer('Traps', darklev).setCollisionByProperty({ collide: true });
  const ground = map.createLayer('Ground', forrest).setCollisionByProperty({ collide: true });
  const gems = this.createGems(gemslayer);
  const key = this.createKey(keylayer);

  this.score = window.score;

  this.sound.add('jump');
  this.sound.add('collect');
  this.sound.add('death');

  const dino1 = this.physics.add.image(550, 300, 'dino').setScale(1);
  dino1.body.setSize(dino1.width * 0.3, dino1.height * 0.8);
  this.physics.add.collider(dino1, ground);
  this.physics.add.collider(dino1, platforms);


  const dino2 = this.physics.add.image(850, 450, 'dino').setScale(1);
  dino2.body.setSize(dino2.width * 0.3, dino2.height * 0.8);
  this.physics.add.collider(dino2, ground);
  this.physics.add.collider(dino2, platforms);

  const dino3 = this.physics.add.image(1120, 50, 'dino').setScale(1);
  dino3.body.setSize(dino3.width * 0.3, dino3.height * 0.8);
  this.physics.add.collider(dino3, ground);
  this.physics.add.collider(dino3, platforms);

  this.tweens.add({
    targets: [dino1],
    x: 700,
    duration: 3000,
    ease: 'easeIn',
    flipX: true,
    yoyo: true,
    repeat: -1,
  });

  this.tweens.add({
    targets: [dino2],
    x: 1000,
    duration: 2500,
    ease: 'easeIn',
    flipX: true,
    yoyo: true,
    repeat: -1,
  });

  this.tweens.add({
    targets: [dino3],
    x: 1250,
    duration: 2000,
    ease: 'easeIn',
    flipX: true,
    yoyo: true,
    repeat: -1,
  });

  this.text = this.createText();
  this.player = this.physics.add.sprite(40, 380, 'soha', 'Idle-1.png');
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
  this.physics.add.collider(this.player, rivers, this.gameOver, null, this);
  this.physics.add.overlap(this.player, key, this.nextLevel, null, this);
  this.physics.add.overlap(this.player, dino1, this.gameOver, null, this);
  this.physics.add.overlap(this.player, dino2, this.gameOver, null, this);
  this.physics.add.overlap(this.player, dino3, this.gameOver, null, this);


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

createKey(keylayer) {
  const keys = this.physics.add.staticGroup();
  keylayer.objects.forEach((item) => {
    keys.get(item.x, item.y, 'keys');
  });
  return keys;
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

nextLevel() {
  this.scene.start('level2', { score: this.score });
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
