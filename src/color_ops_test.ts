import * as assert from 'assert';
import { amtPrimaries } from './color_ops';
import { cons, nil } from "./list";
import { PURPLE, GREEN, ORANGE, Secondary } from "./paint";

// TODO (Task 6b):
// - Write tests according to our class requirements for amtPrimaries
// - Include comments describing which requirements each test fulfills

describe('color_ops', function() {

  it('amtPrimaries', function() {
    assert.deepStrictEqual(amtPrimaries(nil), [0, 0, 0]);
    assert.deepStrictEqual(amtPrimaries(cons<Secondary>(PURPLE, nil)), [0.5, 0.5, 0]);
    const many = cons<Secondary>(
      PURPLE,
      cons<Secondary>(GREEN, cons<Secondary>(ORANGE, cons<Secondary>(PURPLE, nil)))
    );
    assert.deepStrictEqual(amtPrimaries(many), [1.5, 1.5, 1.0]);
  });

});