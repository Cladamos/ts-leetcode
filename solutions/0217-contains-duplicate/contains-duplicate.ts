export function sort(nums: number[]): boolean {
  const sortedNums = nums.sort();
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      return true;
    }
  }
  return false;
}
export function hashset(nums: number[]): boolean {
  let hashset = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (hashset.has(nums[i])) {
      return true;
    }
    hashset.add(nums[i]);
  }
  return false;
}

export function hashsetSize(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

export function bruteForce(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
