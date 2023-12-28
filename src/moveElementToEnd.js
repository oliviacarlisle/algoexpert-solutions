function moveElementToEnd(array, toMove) {
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  let a = 0;
  let b = array.length - 1;
  while (a < b) {
    while (array[b] === toMove && b > a) b--;
    if (array[a] === toMove) {
      swap(array, a, b);
      b--;
    } 
    a++;
   
  }
  return array;
}