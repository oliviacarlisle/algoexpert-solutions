function bubbleSort(array) {
    let swaps;
    for (let i = 0; i < array.length; i++) {
      swaps = 0;
      for (let j = 0; j + 1 < array.length; j++) {
        if (array[j] > array[j + 1]) { // swap two numbers
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swaps++;
        }
      }
      if (swaps === 0) return array;
    }
    return array;    
}