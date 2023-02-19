function jump(n: number): number {
  // 1.定义状态 和 2.初始化状态
  let prev = 1
  let cur = 1

  for (let i = 2; i <= n; i++) {
    // 3.状态转移方程 dp[i] = dp[i-1] + dp[i-2]
    const newValue = prev + cur
    prev = cur
    cur = newValue
  }

  // 4.计算出结果
  return cur
}

console.log(jump(3))
console.log(jump(5))

export {}
