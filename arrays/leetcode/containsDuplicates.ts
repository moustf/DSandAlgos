function containsDuplicateOne(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
          return true;
      }
  }

  return false;
};