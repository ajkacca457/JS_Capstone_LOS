import Gameover from '../gameover';

const scene = new Gameover();

test('gameover is of type function', () => {
  expect(typeof Gameover).toBe('function');
});

test('gameover key name is gameover', () => {
  expect(scene.sys.config).toBe('gameover');
});

test('gameover scene is not undefined', () => {
  expect(scene.sys.config).not.toBe(undefined);
});

/*eslint-disable */
test('gameover scene is a subclass of scene', () => {
  expect(Gameover.prototype instanceof Phaser.Scene).toBe(true);
});
/* eslint-enable */

test('gameover to contain private variable player', () => {
  expect(scene.name).toBe(undefined);
});

test('gameover to contain private variable score', () => {
  expect(scene.score).toBe(undefined);
});

test('gameover to have a scene', () => {
  expect(scene.scene).not.toBe(null);
});

test('gameover to contain private variable text', () => {
  expect(scene.text).toBe(undefined);
});

test('gameover to contains a map', () => {
  expect(scene.map).not.toBe(null);
});
