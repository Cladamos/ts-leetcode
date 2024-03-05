import { expect, test } from "vitest";
import { topKFrequent } from "./top-k-frequent-elemets";

const cases = [
  {
    name: "[1,1,1,2,2,3]",
    input: [1, 1, 1, 2, 2, 3],
    k: 2,
    want: [1, 2],
  },
  {
    name: "[1]",
    input: [1],
    k: 1,
    want: [1],
  },
];

cases.forEach((c) => {
  test(c.name, () => {
    expect(topKFrequent(c.input, c.k).sort()).toEqual(c.want.sort());
  });
});
