export function isPrime(num: number): boolean {
  const temp = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= temp; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
