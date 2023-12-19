function binarySearch(array, target) { // iterative approach
    let a = 0;
    let b = array.length - 1;
  
    while (a <= b) {
      let m = Math.floor((a + b) / 2);
      if (array[m] === target) return m;
      else if (array[m] < target) a = m + 1;
      else b = m - 1;
    }
  
    return -1;    
}