export function hashMap(s: string, t: string): boolean {
  const m = new Map<string, number>();

  s.split("").forEach((c) => m.set(c, m.has(c) ? m.get(c)! + 1 : 1));
  t.split("").forEach((c) => m.set(c, m.has(c) ? m.get(c)! - 1 : -1));

  return Array.from(m.values()).every((value) => value === 0);
}

export function sort(s: string, t: string): boolean {
  return s.split("").sort().join() === t.split("").sort().join();
}
