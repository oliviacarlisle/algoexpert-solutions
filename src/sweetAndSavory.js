function sweetAndSavory(dishes, target) {
  let bestPair = [0, 0];
  let profile = -Infinity;
  dishes.sort((a, b) => a - b);
  console.log(dishes);
  
  let left = 0;
  let right = dishes.length - 1;
  while (left < right && dishes[left] < 0 && dishes[right] > 0) {
    let sum = dishes[left] + dishes[right];
    if (sum <= target) { // if sweet enough
      if (sum > profile) { // if best pair yet
        profile = sum;
        bestPair = [dishes[left], dishes[right]];
      }
      left++;
    } else { // if too savory
      right--;
    }
  }
  
  return bestPair;
}