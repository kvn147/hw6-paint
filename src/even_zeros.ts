import { List } from "./list";

// Tests for these functions belong in even_zeros_test.ts

/**
 * The set of base-3 digits.
 * A base-3 number is represented by List<Digit>
 */
export type Digit = 0 | 1 | 2;

/**
 * Calculates the number of zero digits in a base3 number and
 * whether the number is even
 *
 * @param L list representing a base3 number
 * @returns zeros(L) and even(L) in a tuple, where:
 *  zeros: List<Digit> -> N
 *      zeros(nil)   := 0
 *      zeros(0::ds) := 1 + zeros(ds)
 *      zeros(1::ds) := zeros(ds)
 *      zeros(2::ds) := zeros(ds)
 *  even: List<Digit> -> B
 *      even(nil)   := true
 *      even(0::ds) := even(ds)
 *      even(1::ds) := not even(ds)
 *      even(2::ds) := even(ds)
 */
export const even_zeros = (L: List<Digit>): [bigint, boolean] => {
  // {{ L = L_0 }}

  // TODO (Task 6a): uncomment this variables & fill in the blanks
  // let a: bigint = ______;
  // let b: boolean = ______;

  // Inv: zeros(L_0) = a + zeros(L) and even(L_0) = (b = even(L))
  while (L.kind !== "nil") {
    // ...
    // TODO: fill in the code here
    // ...

    L = L.tl;
  }

  // {{ a = zeros(L_0) and b = even(L_0) }}
  return [-1n, false]; // TODO: fill in values with correct variables
};
