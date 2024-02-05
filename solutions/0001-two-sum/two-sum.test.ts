import { hashmap, bruteForce } from "./two-sum";
import { expect, test } from "vitest";

const cases = [
  { name: "[2,7,11,15]", input: [2, 7, 11, 15], target: 9, res: [0, 1] },
  { name: "[3,2,4]", input: [3, 2, 4], target: 6, res: [1, 2] },
  { name: "[3,3]", input: [3, 3], target: 6, res: [0, 1] },
];

cases.forEach((c) => {
  test(c.name, () => {
    expect(hashmap(c.input, c.target).sort()).toEqual(c.res);
    expect(bruteForce(c.input, c.target).sort()).toEqual(c.res);
  });
});
