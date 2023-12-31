function largestRange(array) {
  const nums = new Map();
  for (let i = 0; i < array.length; i++) { // fill hash table
    if (!nums.has(array[i])) nums.set(array[i], false);
  }
  let maxRange;
  let i = 0;
  while (i < array.length) {
    let right = array[i] + 1;
    let left = array[i] - 1;
    while (nums.has(right) && !nums.get(right)) { // expand right
      nums.set(right, true)
      right++;
    }
    while (nums.has(left) && !nums.get(left)) { // expand left
      nums.set(left, true);
      left--;
    }
    right -= 1;
    left += 1;
    if (!maxRange || (right - left > maxRange[1] - maxRange[0])) {
      maxRange = [left, right];
    }
    
    i++;
  }
  return maxRange;
}