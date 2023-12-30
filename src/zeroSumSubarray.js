function zeroSumSubarray(nums) {
    const sums = new Map();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum === 0) return true;
      else if (sums.has(sum)) return true;
      else sums.set(sum, true);
    }
    return false;
}