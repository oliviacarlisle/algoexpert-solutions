function longestPeak(array) {
  let maxLen = 0;
  for (let i = 1; i + 1 < array.length; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      let len = 3;
      for (let j = i + 1; j + 1 < array.length; j++) { // check right
        if (array[j] > array[j + 1]) len++;
        else break;
      }
      for (let j = i - 1; j - 1 >= 0; j--) { // check left
        if (array[j - 1] < array[j]) len++;
        else break;
      }
      // update maxLen if len > maxLen
      if (len > maxLen) maxLen = len;
    }
  }
  return maxLen;
}