function minNumberOfCoinsForChange(n, denoms) {
  const coins = new Array(n + 1).fill(+Infinity);
  coins[0] = 0;
  denoms.forEach(d => {
    for (let i = 0; i < coins.length; i++) {
      if (d <= i) {
        coins[i] = Math.min(coins[i], 1 + coins[i - d]);
      }
    }
  });
  return (coins[n] < +Infinity) ? coins[n] : -1;
}