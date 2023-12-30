function firstDuplicateValue(array) {
    const counts = new Map();
    for (let i = 0; i < array.length; i++) {
      if (counts.has(array[i])) return array[i];
      else counts.set(array[i], 1);
    }
    return -1;
}