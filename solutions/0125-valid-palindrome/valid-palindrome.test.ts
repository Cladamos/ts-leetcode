import { test, expect } from "vitest";
import { isPalindrome } from "./valid-palindrome";

const cases = [
    {
      name: "A man, a plan, a canal: Panama",
      input: "A man, a plan, a canal: Panama",
      output: true,
    },
    { name: "race a car", input: "race a car", output: false },
    { name: "", input: "", output: true},
  ];

  cases.forEach((c) => test(c.name, () => 
    expect(isPalindrome(c.input) === c.output)))
  