function selectionSort(array) {
    const swap = (arr, i, j) => {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };
    
    for (let i = 0; i < array.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIdx]) minIdx = j;
      }
      // swap element at index minIdx with element at index i
      swap(array, minIdx, i);
    }
    return array;
}