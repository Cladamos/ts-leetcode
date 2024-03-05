export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const freq: number[][] = Array.apply(null, Array(nums.length + 1)).map(
    () => []
  );
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i])! + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [key, value] of map) {
    freq[value].push(key);
  }
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < freq[i].length; j++) {
      res.push(freq[i][j]);
      if (res.length == k) {
        return res;
      }
    }
  }
  return res;
}
