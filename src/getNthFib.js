function getNthFib(n) {

    let a = 0;
    let b = 1;
    let sum;
  
    if (n === 1) return a;
    if (n === 2) return b;
    
    for (let i = 2; i < n; i++) {
      sum = a + b;
      a = b;
      b = sum;
    }
    
    return sum;
}