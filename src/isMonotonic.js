function isMonotonic(array) {
    let nonIncr = true;
    let nonDecr = true;
    for (let i = 0; i + 1 < array.length; i++) {
      if (array[i] < array[i + 1]) nonIncr = false;
      if (array[i] > array[i + 1]) nonDecr = false;
      if (!nonIncr && !nonDecr) break;
    }
  
    return nonIncr || nonDecr;
}