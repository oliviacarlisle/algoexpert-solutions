function kadanesAlgorithm(array) {
    let sum = 0;
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
      sum = Math.max(sum + array[i], array[i]);
      if (sum > max) max = sum;
    }
    return max;
}