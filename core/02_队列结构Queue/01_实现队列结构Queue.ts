import IQueue from './IQueue'

export default class ArrayQueue<T> implements IQueue<T> {
  protected data: T[] = []

  enqueue(value: T): void {
    this.data.push(value)
  }

  dequeue(): T | undefined {
    return this.data.shift()
  }

  peek(): T | undefined {
    return this.data[0]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }
}
