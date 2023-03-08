function evalRPN(tokens: string[]): number {
  const n = tokens.length
  const stack: number[] = []

  for (let i = 0; i < n; i++) {
    const item = tokens[i]

    if (isNaN(Number(item))) {
      const num2 = stack.pop()!
      const num1 = stack.pop()!

      if (item === '+') {
        stack.push(num1 + num2)
      } else if (item === '-') {
        stack.push(num1 - num2)
      } else if (item === '*') {
        stack.push(num1 * num2)
      } else if (item === '/') {
        stack.push(Math.trunc(num1 / num2))
      }
    } else {
      stack.push(Number(item))
    }
  }

  return stack.pop()!
}

console.log(evalRPN(['4', '13', '5', '/', '+']))
