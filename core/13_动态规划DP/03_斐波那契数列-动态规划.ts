function fib(n: number): number {
  // 1.定义状态
  // db保留斐波那契数列中每一个位置对应的值(状态)
  // dp[x]表示的就是x位置对应的值(状态)
  // 2.状态转移方程: dp[i] = dp[i - 1] + dp[i - 2]
  // 状态转移方程一般情况都是写在循环中
  // 3.设置初始化状态: dp[0]/dp[1]
  // 4.计算最终的结果

  if (n <= 1) return n

  // 1.定义状态
  const db: number[] = []

  // 2.初始化状态
  db.push(0)
  db.push(1)

  for (let i = 2; i <= n; i++) {
    // 3.状态转移方程
    db.push(db[i - 1] + db[i - 2])
  }

  // 4.计算最终的结果
  return db[n]
}

console.log(fib(10)) // 55
console.log(fib(50)) // 12586269025
console.log(fib(100)) // 354224848179262000000

export {}
