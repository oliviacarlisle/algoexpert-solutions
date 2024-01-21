function levenshteinDistance(str1, str2) {
  const matrix = [];

  // initialize matrix
  for (let i = 0; i < str1.length + 1; i++) {
    matrix.push(new Array(str2.length + 1));
  }
  for (let r = 0; r < str1.length + 1; r++) {
    matrix[r][0] = r;
  }
  for (let c = 0; c < str2.length + 1; c++) {
    matrix[0][c] = c;
  }

  // fill matrix
  for (let r = 1; r < matrix.length; r++) {
    for (let c = 1; c < matrix[0].length; c++) {
      if (str1[r - 1] === str2[c - 1]) {
        matrix[r][c] = matrix[r - 1][c - 1];
      } else {
        matrix[r][c] = 1 + Math.min(matrix[r][c-1], matrix[r-1][c], matrix[r-1][c-1]);
      }
    }
  }
  
  return matrix[matrix.length - 1][matrix[0].length - 1];
}