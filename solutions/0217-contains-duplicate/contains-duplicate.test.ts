import { sort, hashset, hashsetSize, bruteForce } from "./contains-duplicate";
import { expect, test } from "vitest";

const cases = [
  {
    name: "[1,2,3,4]",
    input: [1, 2, 3, 4],
    res: false,
  },
  {
    name: "[1,2,3,1]",
    input: [1, 2, 3, 1],
    res: true,
  },
  {
    name: "[1,1,1,1,2,2,2,3,3,3,3,3,3,3,3]",
    input: [1, 2, 3, 1],
    res: true,
  },
];

cases.forEach((c) => {
  test(c.name, () => {
    expect(sort(c.input)).toBe(c.res);
    expect(hashset(c.input)).toBe(c.res);
    expect(hashsetSize(c.input)).toBe(c.res);
    expect(bruteForce(c.input)).toBe(c.res);
  });
});
