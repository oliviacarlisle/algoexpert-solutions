function mergeOverlappingIntervals(array) {
    array.sort((a, b) => a[0] - b[0]);
    const output = [];
    let i = 0;
    while (i < array.length) {
      let j = i + 1;
      while (j < array.length && array[i][1] >= array[j][0]) { // overlap found
        console.log(i, j)
        array[i][1] = Math.max(array[i][1], array[j][1]); // merge
        j++;
      }
      output.push(array[i]);
      i = Math.max(i + 1, j);
    }
    return output;
}