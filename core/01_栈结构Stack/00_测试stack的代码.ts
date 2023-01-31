import ArrayStack from './01_实现栈结构Stack'

const strStack = new ArrayStack<string>()

strStack.push('a')
strStack.push('b')
strStack.push('c')

console.log(strStack.peek())

console.log(strStack.pop())
console.log(strStack.pop())
console.log(strStack.pop())

console.log(strStack.isEmpty())
console.log(strStack.size())
