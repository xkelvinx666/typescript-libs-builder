import sampleCase from '../src/index';

describe('test samplteCase', () => {
  test('test result equal hello world', () => {
    expect(sampleCase()).toBe('Hello World');
  });
});
