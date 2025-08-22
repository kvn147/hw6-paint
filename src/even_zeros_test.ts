import * as assert from 'assert';
import { even_zeros, Digit } from './even_zeros';
import { cons, nil } from "./list";

// TODO (Task 6a):
// - Write tests according to our class requirements for even_zeros
// - Include comments describing which requirements each test fulfills

describe('even_zeros', function () {

  it('even_zeros', function () {
    // statement coverage: Reaches all executable statements
    // branch coverage: Test all cases, d==0, d==1, d==2
    // loop coverage: Test 0 iterations, 1 iteration, and multiple iterations

    // branch coverage: base case for empty list
    assert.deepStrictEqual(even_zeros(nil), [0n, true]);

    // loop coverage: 1 iteration
    assert.deepStrictEqual(even_zeros(cons<Digit>(0, nil)), [1n, true]);

    // loop coverage: 1 iteration
    assert.deepStrictEqual(even_zeros(cons<Digit>(1, nil)), [0n, false]);
    
    // loop coverage: Multiple iterations
    const many = cons<Digit>(1, cons<Digit>(0, cons<Digit>(1, cons<Digit>(2, cons<Digit>(0, nil)))));
    assert.deepStrictEqual(even_zeros(many), [2n, true]);
  });
});