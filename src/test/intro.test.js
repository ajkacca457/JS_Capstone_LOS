import Intro from '../intro';

const scene = new Intro();

test('Intro is of type function', () => {
  expect(typeof Intro).toBe('function');
});

test('Intro key name is intro', () => {
  expect(scene.sys.config).toBe('intro');
});

test('Intro scene is not undefined', () => {
  expect(scene.sys.config).not.toBe(undefined);
});

test('Intro to contain private variable character', () => {
  expect(scene.character).toBe(undefined);
});

test('Intro to have a scene', () => {
  expect(scene.scene).not.toBe(null);
});

test('Intro scene is a subclass of scene', () => {
  expect(Intro.prototype instanceof Phaser.Scene).toBe(true);
});
