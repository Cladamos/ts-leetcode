import { test, expect } from "vitest";
import { groupAnagrams } from "./group-anagrams";

const cases = [
  {
    name: '["eat","tea","tan","ate","nat","bat"]',
    input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  },
  { name: '[""]', input: [""], output: [[""]] },
  { name: '["a"]', input: ["a"], output: [["a"]] },
];

cases.forEach((c) => {
  test(c.name, () => {
    let got = groupAnagrams(c.input).sort();
    got = got.map((s) => s.sort());

    let want = c.output.sort();
    want = want.map((s) => s.sort());

    expect(got.sort()).toEqual(want.sort());
  });
});
