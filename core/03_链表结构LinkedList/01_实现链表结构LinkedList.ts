// 1.创建 Node 节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 2.创建 LinkedList 的类
class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  // 根据 position 获取到当前的节点
  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }

  // 追加节点
  append(value: T) {
    // 1.根据 value 创建一个新节点
    const newNode = new Node(value)

    // 2.判断 this.head 是否为 null
    if (!this.head) {
      this.head = newNode
    } else {
      // 拿到最后的 node
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    // 3.size++
    this.size++
  }

  // 遍历链表
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('->'))
  }

  // 插入
  insert(value: T, position: number): boolean {
    // 1.越界的判断
    if (position < 0 || position > this.size) return false

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
    }
    this.size++

    return true
  }

  // 删除
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      // 获取要删除节点的父节点
      const previous = this.getNode(position - 1)

      // 将要删除节点赋值给 current
      current = previous!.next

      // 将父节点的 next 指向删除节点的 next
      previous!.next = current?.next ?? null
    }

    this.size--

    return current?.value ?? null
  }

  // 获取
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    return this.getNode(position)?.value ?? null
  }

  // 更新
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false
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
      current = current.next
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
    return this.size === 0
  }
}

const linkedList = new LinkedList<string>()

console.log('------------ append ------------')
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.traverse()

console.log('------------ insert ------------')
linkedList.insert('hhh', 0)
linkedList.insert('hxl', 1)
linkedList.insert('why', 3)
linkedList.insert('fuhuan', 6)
linkedList.traverse()

console.log('------------ removeAt ------------')
console.log(linkedList.removeAt(0))
console.log(linkedList.removeAt(3))
linkedList.traverse()

console.log('------------ get ------------')
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

console.log('------------ update ------------')
linkedList.update('abc', 1)
linkedList.update('cba', 3)
linkedList.traverse()

console.log('------------ indexOf ------------')
console.log(linkedList.indexOf('hxl'))
console.log(linkedList.indexOf('why'))
console.log(linkedList.indexOf('fuhuan'))

console.log('------------ remove ------------')
linkedList.remove('abc')
linkedList.remove('cba')
linkedList.traverse()

console.log('------------ isEmpty ------------')
console.log(linkedList.isEmpty())

export {}
