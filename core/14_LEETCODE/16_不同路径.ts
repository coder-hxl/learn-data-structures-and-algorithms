function uniquePaths(m: number, n: number): number {
  // 1.定义状态二维数组
  /* 
    [
      [0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0]
    ]
  */
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0))

  // 2.初始化状态
  /* 
    [
      [1, 1, 1, 1, 1, 1, 1], 
      [1, 0, 0, 0, 0, 0, 0], 
      [1, 0, 0, 0, 0, 0, 0]
    ]
  */
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  // 3.状态转移方程
  // i = 1, j = 1 => db[i][j] = db[i][j - 1] + db[i - 1][j]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }

  // 4.计算最终结果
  return dp[m - 1][n - 1]
}

console.log(uniquePaths(3, 7))
