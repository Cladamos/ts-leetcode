import { expect, test } from "vitest";
import { productExceptSelf } from "./product-except-self";

const cases = [
  {
    name: "[1,2,3,4]",
    input: [1, 2, 3, 4],
    want: [24, 12, 8, 6],
  },
  {
    name: "[-1,1,0,-3,3]",
    input: [-1, 1, 0, -3, 3],
    want: [0, 0, 9, 0, 0],
  },
];

cases.forEach((c) => {
  test(c.name, () => {
    expect(productExceptSelf(c.input).sort()).toEqual(c.want.sort());
  });
});
