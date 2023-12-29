function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let bestPair;
    let bestDiff;
    let i = 0; // pointer for arrayOne
    let j = 0; // pointer for arrayTwo
    while (i < arrayOne.length && j < arrayTwo.length) {
      let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (diff === 0) return [arrayOne[i], arrayTwo[j]];
      if (!bestPair || diff < bestDiff) { // update bestPair
        bestPair = [arrayOne[i], arrayTwo[j]];
        bestDiff = diff;
      } 
      if (arrayOne[i] < arrayTwo[j]) i++;
      else j++; 
    }
    return bestPair;
}