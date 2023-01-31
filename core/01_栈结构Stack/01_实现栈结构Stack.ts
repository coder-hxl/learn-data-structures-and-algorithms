import IStack from './IStack'

export default class ArrayStack<T> implements IStack<T> {
  private data: T[] = []

  push(value: T): void {
    this.data.push(value)
  }

  pop(): T | undefined {
    return this.data.pop()
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }
}
