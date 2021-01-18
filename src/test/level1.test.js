import Level1 from '../level1';

const scene = new Level1();

test('Level1 is of type function', () => {
  expect(typeof Level1).toBe('function');
});

test('Level1 key name is intro', () => {
  expect(scene.sys.config).toBe('level1');
});

test('Level1 scene is not undefined', () => {
  expect(scene.sys.config).not.toBe(undefined);
});

test('Level1 scene is a subclass of scene', () => {
  expect(Level1.prototype instanceof Phaser.Scene).toBe(true);
});

test('Level1 to contain private variable player', () => {
  expect(scene.player).toBe(undefined);
});

test('Level1 to contain private variable score', () => {
  expect(scene.score).toBe(undefined);
});
test('Level1 to contain private variable text', () => {
  expect(scene.text).toBe(undefined);
});

test('Level1 has a scene', () => {
  expect(scene.scene).not.toBe(null);
});

test('Level1 to contains a map', () => {
  expect(scene.map).not.toBe(null);
});
