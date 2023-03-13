function maxValue(grid: number[][]): number {
  // 1.获取 m 排 n 列
  const m = grid.length
  const n = grid[0].length

  // 2.定义状态和初始化状态
  const dp: number[][] = Array.from({ length: m + 1 }, () => {
    return Array(n + 1).fill(0)
  })

  // 3.状态转移方程
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]) + grid[i - 1][j - 1]
    }
  }

  // 4.计算最终的结果
  return dp[m][n]
}

function maxValue2(grid: number[][]): number {
  // 1.获取 m 排 n 列
  const m = grid.length
  const n = grid[0].length

  // 2.定义状态
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0))

  // 3.初始化状态
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  // 3.状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
    }
  }

  // 4.计算最终的结果
  return dp[m - 1][n - 1]
}

console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)
