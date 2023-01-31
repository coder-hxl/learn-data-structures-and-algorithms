import ArrayStack from './01_实现栈结构Stack'

function isValid(s: string): boolean {
  const stack = new ArrayStack<string>()

  for (let i = 0; i < s.length; i++) {
    const item = s[i]

    switch (item) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (item !== stack.pop()) return false
        break
    }
  }

  return stack.isEmpty()
}

console.log(isValid('()[]{}'))
console.log(isValid('([]){}['))
console.log(isValid('()[{]}'))
