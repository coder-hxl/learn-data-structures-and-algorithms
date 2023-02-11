import ILinkedList from './ILinkedList'
import { Node } from './LinkedNode'

// 创建 LinkedList 的类
export default class LinkedList<T> implements ILinkedList<T> {
  protected head: Node<T> | null = null
  protected length: number = 0

  // 新增属性: tail 总是指向尾部
  protected tail: Node<T> | null = null

  // 根据 position 获取到当前的节点
  protected getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }

  size(): number {
    return this.length
  }

  peek(): T | undefined {
    return this.head?.value
  }

  // 判断是否是最后一个节点
  private isTail(node: Node<T>) {
    return node === this.tail
  }

  // 追加节点
  append(value: T) {
    // 1.根据 value 创建一个新节点
    const newNode = new Node(value)

    // 2.判断 this.head 是否为 null
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail!.next = newNode
    }

    // 3.赋值 tail
    this.tail = newNode

    // 4.length++
    this.length++
  }

  // 遍历链表
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)

      if (this.isTail(current)) {
        // 最后一个节点
        current = null
      } else {
        current = current.next
      }
    }

    // 循环链表
    if (this.head && this.tail?.next === this.head) {
      values.push(this.head.value)
    }

    console.log(values.join('->'))
  }

  // 插入
  insert(value: T, position: number): boolean {
    // 1.越界的判断
    if (position < 0 || position > this.length) return false

    // 2.根据value创建新的节点
    const newNode = new Node(value)

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      // 拿到目标的上一个, 将新节点的 next 指向上一个的 next, 上一个的 next 再指向新节点
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode

      // 获取最新 tail
      if (position === this.length) {
        this.tail = newNode
      }
    }
    this.length++

    return true
  }

  // 删除
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length) return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null

      if (this.length === 1) {
        this.tail = null
      }
    } else {
      // 获取要删除节点的父节点
      const previous = this.getNode(position - 1)

      // 将要删除节点赋值给 current
      current = previous!.next

      // 将父节点的 next 指向删除节点的 next
      previous!.next = current?.next ?? null

      if (position === this.length - 1) {
        this.tail = previous
      }
    }

    this.length--

    return current?.value ?? null
  }

  // 获取
  get(position: number): T | null {
    if (position < 0 || position >= this.length) return null
    return this.getNode(position)?.value ?? null
  }

  // 更新
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.length) return false
    // 获取对应位置的节点, 直接更新
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  }

  // 根据值获取对应索引
  indexOf(value: T): number {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }

      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }

      index++
    }

    return -1
  }

  // 根据值删除节点
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  // 判断链表是否为空
  isEmpty() {
    return this.length === 0
  }
}

const linkedList = new LinkedList<string>()

// console.log('------------ append ------------')
// linkedList.append('aaa')
// linkedList.append('bbb')
// linkedList.append('ccc')
// linkedList.traverse()

// console.log('------------ insert ------------')
// linkedList.insert('hhh', 0)
// linkedList.insert('hxl', 1)
// linkedList.insert('why', 3)
// linkedList.insert('fuhuan', 6)
// linkedList.traverse()

// console.log('------------ removeAt ------------')
// console.log(linkedList.removeAt(0))
// console.log(linkedList.removeAt(3))
// linkedList.traverse()

// console.log('------------ get ------------')
// console.log(linkedList.get(0))
// console.log(linkedList.get(1))
// console.log(linkedList.get(2))

// console.log('------------ update ------------')
// linkedList.update('abc', 1)
// linkedList.update('cba', 3)
// linkedList.traverse()

// console.log('------------ indexOf ------------')
// console.log(linkedList.indexOf('hxl'))
// console.log(linkedList.indexOf('why'))
// console.log(linkedList.indexOf('fuhuan'))

// console.log('------------ remove ------------')
// linkedList.remove('abc')
// linkedList.remove('cba')
// linkedList.traverse()

// console.log('------------ isEmpty ------------')
// console.log(linkedList.isEmpty())
