import IStack from './IStack'

export default class LinkedStack<T> implements IStack<T> {
  push(value: T): void {
    throw new Error('Method not implemented.')
  }
  pop(): T | undefined {
    throw new Error('Method not implemented.')
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  size(): number {
    throw new Error('Method not implemented.')
  }
}
