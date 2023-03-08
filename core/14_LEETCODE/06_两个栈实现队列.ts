class CQueue {
  private stack: number[] = []
  private stack2: number[] = []

  constructor() {}

  appendTail(value: number): void {
    this.stack.push(value)
  }

  deleteHead(): number {
    const stack = this.stack
    const stack2 = this.stack2

    if (!stack2.length) {
      while (stack.length) {
        stack2.push(stack.pop()!)
      }
    }

    return stack2.pop() ?? -1
  }
}

const queue = new CQueue()

queue.appendTail(12)
queue.appendTail(43)

console.log(queue.deleteHead())
queue.appendTail(33)
console.log(queue.deleteHead())
console.log(queue.deleteHead())
