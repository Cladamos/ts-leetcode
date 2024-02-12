export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const s of strs) {
    const sorted = s.split("").sort().join();
    const v = map.get(sorted) ?? [];
    v.push(s);
    map.set(sorted, v);
  }

  return Array.from(map.values());
}
