function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
  
    let sum = 0;
  
    for (let i = 0; i < queries.length; i++) {
      sum += queries[i] * (queries.length - 1 - i);
    }
    
    return sum;
}