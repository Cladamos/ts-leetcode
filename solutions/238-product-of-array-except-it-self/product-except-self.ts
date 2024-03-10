export function productExceptSelf(nums: number[]): number[] {
  let res: number[] = new Array(nums.length - 1).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    res[i] = res[i] + 0; // floating point aritmetics 🤷
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    res[i] = res[i] + 0;
    suffix *= nums[i];
  }

  return res;
}
