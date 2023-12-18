function productSum(array, multiplier = 1) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) sum += (multiplier + 1) * productSum(array[i], multiplier + 1);
      else sum += array[i];
    }
    return sum;
}