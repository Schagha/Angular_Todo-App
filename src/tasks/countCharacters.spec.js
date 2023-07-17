import { countCharacters } from './countCharacters';

describe('countCharacters', () => {
  it('should be a function', () => {
    expect(typeof countCharacters)
    .toBe('function');
  })

  it('should return an object', () => {
    expect(typeof countCharacters({}, {}))
      .toBe('object');
  })
});