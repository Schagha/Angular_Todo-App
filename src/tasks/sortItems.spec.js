import { sortItems } from './sortItems';

// Jasmine documentation: https://jasmine.github.io/api/3.5/global.html

describe('sortItems', () => {
  it('should be a function', () => {
    expect(typeof sortItems)
      .toBe('function');
  })
})