function fib(n: number): number {
  if (n <= 1) return n

  return fib(n - 1) + fib(n - 2)
}

// 0 1 1 2 3 5 8
console.log(fib(10))
console.log(fib(50))

export {}
