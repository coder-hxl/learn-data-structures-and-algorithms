function maxProfit(prices: number[]): number {
  // 1.定义状态: dp[i]
  // 到i天能获取的最大收益是多少
  // 2.状态转移方程
  // dp[i] = max(prices[i] - minPrice, dp[i - 1])
  // 3.初始化状态: dp[0] = 0
  // 4.获取最后一次的值: dp[n - 1]

  const n = prices.length
  if (n <= 1) return 0

  // 1.定义状态
  const dp: number[] = []
  // 2.设置初始化值
  dp[0] = 0
  // 3.状态转移方程求dp[i]
  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    // prices[i] - minPrice
    dp[i] = Math.max(prices[i] - minPrice, dp[i - 1])
    minPrice = Math.min(prices[i], minPrice)
  }

  return dp[n - 1]
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

export {}
