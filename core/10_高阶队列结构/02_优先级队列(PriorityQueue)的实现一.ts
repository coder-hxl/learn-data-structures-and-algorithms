import Heap from '../09_堆结构Heap/03_堆结构Heap(二叉堆)'

// 封装 PriorityNode
class PriorityNode<T> {
  priority: number
  value: T

  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }

  valueOf() {
    return this.priority
  }
}

// 创建 PriorityQueue
class PriorityQueue<T> {
  head = new Heap<PriorityNode<T>>()

  enQueue(value: T, priority: number) {
    const node = new PriorityNode(value, priority)
    this.head.insert(node)
  }

  deQueue(): T | undefined {
    return this.head.extract()?.value
  }

  peek(): T | undefined {
    return this.head.peek()?.value
  }

  isEmpt(): boolean {
    return this.head.isEmpty()
  }

  size(): number {
    return this.head.size()
  }
}

const pQueue = new PriorityQueue()
pQueue.enQueue('aaa', 99)
pQueue.enQueue('bbb', 100)
pQueue.enQueue('ccc', 88)
while (!pQueue.isEmpt()) {
  console.log(pQueue.deQueue())
}
