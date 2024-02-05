export function hashmap(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(num)) {
      return [map.get(num)!, i];
    }
    map.set(target - num, i);
  }
  return [];
}

export function bruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
