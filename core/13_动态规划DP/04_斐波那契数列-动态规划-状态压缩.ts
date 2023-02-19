function fib(n: number): number {
  if (n <= 1) return n

  // 1.定义状态 和 2.初始化状态
  let prev = 0
  let cur = 1

  for (let i = 2; i <= n; i++) {
    // 3.状态转移方程
    const newValue = prev + cur
    prev = cur
    cur = newValue
  }

  // 4.计算最终的结果
  return cur
}

console.log(fib(10)) // 55
console.log(fib(50)) // 12586269025
console.log(fib(100)) // 354224848179262000000

export {}
