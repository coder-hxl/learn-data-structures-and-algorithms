import IHeap from './IHeap'

class Heap<T> implements IHeap<T> {
  private data: T[] = []
  private length: number = 0

  private swap() {}

  insert(value: T): void {}

  extract(): T | undefined {
    return undefined
  }

  buildHeap(arr: T[]): void {}

  peek(): T | undefined {
    return this.data[0]
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }
}
