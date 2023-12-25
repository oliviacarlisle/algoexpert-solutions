function threeNumberSum(array, targetSum) {
    const res = [];
    array.sort((a, b) => a - b);
    let left, right, sum;
  
    for (let i = 0; i < array.length; i++) {
      left = i + 1;
      right = array.length - 1;
      while (left < right) {
        sum = array[i] + array[left] + array[right];
        if (sum === targetSum) {
          res.push([array[i], array[left], array[right]]);
          left++;
          right--;
        } else if (sum < targetSum) {
          left++;
        } else if (sum > targetSum) {
          right--;
        }
      }
      
    }
  
    return res;
}