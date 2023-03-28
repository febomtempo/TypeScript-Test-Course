import { toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  it('shoudld return uppercase of valid string', () => {
    const sut = toUpperCase;
    const expected = 'ABC';

    const actual = sut('abc');

    expect(actual).toBe(expected);
  });
});
