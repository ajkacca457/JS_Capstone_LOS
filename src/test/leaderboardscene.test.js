import Leaderboardscene from '../leaderboardscene';

const scene = new Leaderboardscene();

test('leaderboard is of type function', () => {
  expect(typeof Leaderboardscene).toBe('function');
});

test('leaderboard key name is gameover', () => {
  expect(scene.sys.config).toBe('leaderboard');
});

test('leaderboard scene is not undefined', () => {
  expect(scene.sys.config).not.toBe(undefined);
});

test('leaderboard scene is a subclass of scene', () => {
  expect(Leaderboardscene.prototype instanceof Phaser.Scene).toBe(true);
});

test('gameover to contain private variable text', () => {
  expect(scene.text).toBe(undefined);
});

test('gameover to contain private variable text', () => {
  expect(scene.scene).not.toBe(null);
});

test('leaderboard to contains a map', () => {
  expect(scene.map).not.toBe(null);
});
