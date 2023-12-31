function spiralTraverse(array) {
    const output = [];
    let startRow = 0;
    let startCol = 0;
    let endRow = array.length;
    let endCol = array[0].length;
    while (startRow < endRow && startCol < endCol) {
      // top left to top right
      for (let c = startCol; c < endCol; c++) {
        if (startRow < endRow) output.push(array[startRow][c]);
      }
      startRow++;
      // top right to bottom right
      for (let r = startRow; r < endRow; r++) {
        if (startCol < endCol) output.push(array[r][endCol - 1]);
      }
      endCol--;
      // bottom right to bottom left
      for (let c = endCol - 1; c >= startCol; c--) {
        if (startRow < endRow) output.push(array[endRow - 1][c]);
      }
      endRow--;
      // bottom left to top left
      for (let r = endRow - 1; r >= startRow; r--) {
        if (startCol < endCol) output.push(array[r][startCol]);;
      }
      startCol++;
    }
    return output;
}