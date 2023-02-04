/**
 * 判断是否为质数
 * @param num 要判断是数字
 * @return boolean
 */

function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }

  return true
}

console.log(isPrime(6))
console.log(isPrime(27))

console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(31))

export default isPrime
