function numberOfWaysToMakeChange(n, denoms) {
  const ways = [1];
  for (let i = 1; i < n + 1; i++) ways.push(0); // fill ways array with zeroes
  
  for (const d of denoms) {
    for (let i = 1; i < n + 1; i++) {
      if (i - d >= 0) ways[i] += ways[i - d];
    }
  }

  return ways[n];
}