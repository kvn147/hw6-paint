import * as assert from 'assert';
import { even_zeros } from './even_zeros';

// TODO (Task 6a):
// - Write tests according to our class requirements for even_zeros
// - Include comments describing which requirements each test fulfills

describe('even_zeros', function () {

  it('even_zeros', function () {
    // statement coverage:
    // branch coverage:

    assert.deepStrictEqual(even_zeros({ kind: "nil" }), [0n, true]);
    assert.deepStrictEqual(even_zeros({ kind: "cons", hd: 0, tl: { kind: "nil" } }), [1n, true]);
    assert.deepStrictEqual(even_zeros({ kind: "cons", hd: 1, tl: { kind: "nil" } }), [0n, false]);
    assert.deepStrictEqual(even_zeros({ kind: "cons", hd: 2, tl: { kind: "nil" } }), [0n, true]);
  });
});