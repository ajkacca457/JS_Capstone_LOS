import Level2 from '../level2';

const scene = new Level2();

test('Level2 is of type function', () => {
  expect(typeof Level2).toBe('function');
});

test('Level2 key name is intro', () => {
  expect(scene.sys.config).toBe('level2');
});

test('Level2 scene is not undefined', () => {
  expect(scene.sys.config).not.toBe(undefined);
});

test('Level2 scene is a subclass of scene', () => {
  expect(Level2.prototype instanceof Phaser.Scene).toBe(true);
});

test('Level2 to contain private variable player', () => {
  expect(scene.player).toBe(undefined);
});

test('Level2 to contain private variable score', () => {
  expect(scene.score).toBe(undefined);
});
test('Level2 to contain private variable text', () => {
  expect(scene.text).toBe(undefined);
});

test('Level2 to have a scene', () => {
  expect(scene.scene).not.toBe(null);
});

test('Level2 to contains a map', () => {
  expect(scene.map).not.toBe(null);
});
