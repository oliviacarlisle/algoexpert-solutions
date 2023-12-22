function twoNumberSum(array, targetSum) {
    const obj = {};
  
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      const reverse = targetSum - num;
      if (obj[reverse]) return [reverse, num];
      obj[num] = true;
    }
    
    return [];
}