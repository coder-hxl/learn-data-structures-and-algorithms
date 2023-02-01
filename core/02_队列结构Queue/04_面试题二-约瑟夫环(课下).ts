function lastRemaining(n: number, m: number) {
  let position = 0

  for (let i = 2; i <= n; i++) {
    position = (position + m) % i
  }

  return position
}

console.log(lastRemaining(12, 3))
console.log(lastRemaining(5, 3))
