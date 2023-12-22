function isValidSubsequence(array, sequence) {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === sequence[j]) j++;
      if (j === sequence.length) return true;
    }
  
    return false;    
}