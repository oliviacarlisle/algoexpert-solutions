function transposeMatrix(matrix) {
    const transpose = [];
  
    for (let i = 0; i < matrix[0].length; i++) { 
      const col = [];
      for (let j = 0; j < matrix.length; j++) { 
        col.push(matrix[j][i]);
      }
      transpose.push(col); 
    }
    
    return transpose;
}