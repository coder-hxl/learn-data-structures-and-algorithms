import ArrayStack from './01_实现栈结构Stack'

function decimalToBinary(decimal: number): string {
  const stack = new ArrayStack<number>()

  while (decimal / 2) {
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  let binary = ''
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }

  return binary
}

console.log(decimalToBinary(35))
console.log(decimalToBinary(100))
