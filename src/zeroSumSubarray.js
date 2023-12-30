function zeroSumSubarray(nums) {
    const sums = new Set();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum === 0) return true;
      else if (sums.has(sum)) return true;
      else sums.add(sum);
    }
    return false;
}