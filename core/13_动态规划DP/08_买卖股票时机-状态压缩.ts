function maxProfit(prices: number[]): number {
  const n = prices.length
  if (n <= 1) return 0

  // 1.定义状态 和 2.设置初始化值
  let prevPrice = 0

  // 3.状态转移方程求dp[i]
  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    // prices[i] - minPrice
    prevPrice = Math.max(prices[i] - minPrice, prevPrice)
    minPrice = Math.min(prices[i], minPrice)
  }

  return prevPrice
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

export {}
