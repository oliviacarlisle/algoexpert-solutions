function maxSubsetSumNoAdjacent(array) {
  let sums = [0, 0];
  let maxSum = 0;
  for (let i = 0; i < array.length; i++) {
    maxSum = Math.max(sums[0] + array[i], sums[1]);
    sums[0] = sums[1];
    sums[1] = maxSum;
  }
  return maxSum;
}