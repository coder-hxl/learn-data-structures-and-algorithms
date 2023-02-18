import { cbtPrint } from 'hy-algokit'
import IHeap from './IHeap'

export default class Heap<T> implements IHeap<T> {
  data: T[] = []
  private length: number = 0
  private isMax: boolean

  constructor(arr: T[] = [], isMax = true) {
    this.isMax = isMax
    if (arr.length === 0) return
    this.buildHeap(arr)
  }

  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  private compare(i: number, j: number) {
    if (this.isMax) {
      return this.data[i] >= this.data[j]
    } else {
      return this.data[i] <= this.data[j]
    }
  }

  /* 插入 */
  insert(value: T): void {
    // 1.将元素放到数组尾部
    this.data.push(value)
    this.length++

    // 2.维持最大堆的特性: 上滤操作
    this.heapify_up()
  }
  private heapify_up() {
    // 1.获取最后节点的索引
    let index = this.length - 1

    while (index > 0) {
      // 2.获取父节点索引
      const parentIndex = Math.floor((index - 1) / 2)

      // 3.比较 父节点索引对应的节点 和 index 对应的节点大小
      if (this.compare(parentIndex, index)) {
        break
      }

      // 4.交换位置
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  /* 提取 */
  extract(): T | undefined {
    // 1.判断元素个数为 0/1 的情况
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()
    }

    // 2.提取最值
    const topValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--

    // 3.维持最大堆的特性: 下滤操作
    this.heapify_down(0)

    return topValue
  }
  private heapify_down(start: number) {
    // 1.定义索引位置
    let index = start

    while ((index + 1) * 2 <= this.length) {
      // 2.获取左右子节点索引
      const leftIndex = index * 2 + 1
      const rightIndex = leftIndex + 1

      // 3.获取最值的子节点的索引
      let extremeIndex = leftIndex
      if (rightIndex < this.length && this.compare(rightIndex, leftIndex)) {
        extremeIndex = rightIndex
      }

      // 4.比较 当前 index 对应的节点 和 最值对应的节点
      if (this.compare(index, extremeIndex)) {
        break
      }

      // 5.交换位置
      this.swap(index, extremeIndex)
      index = extremeIndex
    }
  }

  /* 原地建堆 */
  buildHeap(arr: T[]): void {
    // 1.使用 arr 的值: 数组/长度
    this.data = arr
    this.length = arr.length

    // 2.从第一个非叶子节点, 开始进行下滤操作
    const start = Math.floor(this.length / 2 - 1)
    for (let i = start; i >= 0; i--) {
      this.heapify_down(i)
    }
  }

  /* 其他方法 */
  peek(): T | undefined {
    return this.data[0]
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }

  print() {
    cbtPrint(this.data)
  }
}

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]

const heap = new Heap<number>(arr, false)
heap.print()

console.log('-------------- insert --------------')
heap.insert(10)
heap.print()

console.log('-------------- extract --------------')
console.log(heap.extract())
heap.print()
