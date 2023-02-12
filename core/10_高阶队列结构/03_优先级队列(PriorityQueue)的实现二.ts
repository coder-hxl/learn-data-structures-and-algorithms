import Heap from '../09_堆结构Heap/03_堆结构Heap(二叉堆)'

// 创建 PriorityQueue
class PriorityQueue<T> {
  head = new Heap<T>()

  enQueue(value: T) {
    this.head.insert(value)
  }

  deQueue(): T | undefined {
    return this.head.extract()
  }

  peek(): T | undefined {
    return this.head.peek()
  }

  isEmpt(): boolean {
    return this.head.isEmpty()
  }

  size(): number {
    return this.head.size()
  }
}

class Student {
  name: string
  score: number
  constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }

  valueOf() {
    return this.score
  }
}

const pQueue = new PriorityQueue()
pQueue.enQueue(new Student('aaa', 99))
pQueue.enQueue(new Student('bbb', 100))
pQueue.enQueue(new Student('ccc', 88))
while (!pQueue.isEmpt()) {
  console.log(pQueue.deQueue())
}
