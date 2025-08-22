import * as assert from 'assert';
import { amtPrimaries } from './color_ops';
import { cons, nil } from "./list";
import { PURPLE, GREEN, ORANGE, Secondary } from "./paint";

// TODO (Task 6b):
// - Write tests according to our class requirements for amtPrimaries
// - Include comments describing which requirements each test fulfills

describe('color_ops', function() {

  it('amtPrimaries', function() {
    // statement coverage: Reaches all executable statements
    // branch coverage: Test all cases for PURPLE, GREEN, ORANGE
    
    // statement coverage: base case for empty list
    assert.deepStrictEqual(amtPrimaries(nil), [0, 0, 0]);

    // branch coverage: PURPLE branch
    // loop coverage: [PURPLE]
    assert.deepStrictEqual(amtPrimaries(cons<Secondary>(PURPLE, nil)), [0.5, 0.5, 0]);
    
    // branch coverage: PURPLE, GREEN, ORANGE branches
    // loop coverage: [PURPLE, GREEN, ORANGE, PURPLE]
    const many = cons<Secondary>(PURPLE, cons<Secondary>(GREEN, cons<Secondary>(ORANGE, cons<Secondary>(PURPLE, nil))));
    assert.deepStrictEqual(amtPrimaries(many), [1.5, 1.5, 1.0]);
  });

});