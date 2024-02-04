import { hashMap, sort } from "./valid-anagram";
import { expect, test } from "vitest";

const cases = [
  {
    name: "cat, rat",
    inputs: ["cat", "rat"],
    res: false,
  },
  {
    name: "anagram, nagaram",
    inputs: ["anagram", "nagaram"],
    res: true,
  },
  {
    name: "aaca, ccac",
    inputs: ["aaca", "ccac"],
    res: false,
  },
];

cases.forEach((c) => {
  test(c.name, () => {
    expect(hashMap(c.inputs[0], c.inputs[1])).toBe(c.res);
  });
});
