function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j] < array[j - 1]) { // swap elements
          const temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
          j--;
        }
      }
  
    return array;
}