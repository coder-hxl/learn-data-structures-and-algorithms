function fib(n: number, memo: number[] = []): number {
  if (n <= 1) return n

  // 求 n 的值, 如果存在就直接返回
  if (memo[n]) {
    return memo[n]
  }

  const result = fib(n - 1, memo) + fib(n - 2, memo)
  // 将 n 的值保存到 memo
  memo[n] = result

  return result
}

// 0 1 1 2 3 5 8
console.log(fib(10)) // 55
console.log(fib(50)) // 12586269025
console.log(fib(100)) // 354224848179262000000

export {}
