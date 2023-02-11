import LinkedList from './01_实现单向链表LinkedList'

import { DoublyNode } from './LinkedNode'

class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | null = null
  protected tail: DoublyNode<T> | null = null

  append(value: T): void {
    const newNode = new DoublyNode(value)

    if (!this.head) {
      this.head = newNode
    } else {
      this.tail!.next = newNode
      newNode.perv = this.tail
    }

    this.tail = newNode

    this.length++
  }

  prepend(value: T): void {
    const newNode = new DoublyNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.perv = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
  }

  postTraverse() {
    const values: T[] = []
    let current = this.tail
    while (current) {
      values.push(current.value)
      current = current.perv
    }

    console.log(values.join('->'))
  }

  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.length) return false

    if (position === 0) {
      this.prepend(value)
    } else if (position === this.length) {
      this.append(value)
    } else {
      const newNode = new DoublyNode(value)
      const current = this.getNode(position) as DoublyNode<T>
      newNode.perv = current.perv
      newNode.next = current
      current.perv!.next = newNode
      current.perv = newNode

      this.length++
    }

    return true
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length) return null

    let current = this.head
    if (position === 0) {
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = current!.next
        this.head!.perv = null
      }
    } else if (position === this.length - 1) {
      current = this.tail!
      this.tail = current.perv
      this.tail!.next = null
    } else {
      current = this.getNode(position) as DoublyNode<T>
      current.perv!.next = current.next
      current.next!.perv = current.perv
    }

    this.length--

    return current?.value ?? null
  }
}

const dLinkedList = new DoublyLinkedList<string>()

console.log('------------ append/prepend ------------')
dLinkedList.append('aaa')
dLinkedList.append('bbb')
dLinkedList.append('ccc')

dLinkedList.prepend('fff')
dLinkedList.prepend('zzz')

dLinkedList.traverse()
dLinkedList.postTraverse()

console.log('------------ insert ------------')
dLinkedList.insert('hhh', 0)
dLinkedList.insert('hxl', 1)
dLinkedList.insert('why', 3)
dLinkedList.insert('fuhuan', 8)
dLinkedList.traverse()
dLinkedList.postTraverse()

console.log('------------ removeAt ------------')
console.log(dLinkedList.removeAt(0))
console.log(dLinkedList.removeAt(3))
console.log(dLinkedList.removeAt(6))
dLinkedList.traverse()
dLinkedList.postTraverse()

console.log('------------ get ------------')
console.log(dLinkedList.get(0))
console.log(dLinkedList.get(1))
console.log(dLinkedList.get(2))

console.log('------------ update ------------')
dLinkedList.update('abc', 1)
dLinkedList.update('cba', 3)
dLinkedList.traverse()

console.log('------------ indexOf ------------')
console.log(dLinkedList.indexOf('hxl'))
console.log(dLinkedList.indexOf('why'))
console.log(dLinkedList.indexOf('fuhuan'))

console.log('------------ remove ------------')
dLinkedList.remove('abc')
dLinkedList.remove('cba')
dLinkedList.traverse()

console.log('------------ isEmpty ------------')
console.log(dLinkedList.isEmpty())
