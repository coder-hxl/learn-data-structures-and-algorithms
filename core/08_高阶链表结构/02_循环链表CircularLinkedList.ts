import LinkedList from './01_实现单向链表LinkedList'

class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)
    // 将最后一个节点的 next 指向第一个节点
    this.tail!.next = this.head
  }

  insert(value: T, position: number): boolean {
    const isSuccess = super.insert(value, position)

    if (isSuccess && (position === super.length - 1 || position === 0)) {
      this.tail!.next = this.head
    }

    return isSuccess
  }

  removeAt(position: number): T | null {
    const value = super.removeAt(position)

    if (value && this.tail && (position === this.length || position === 0)) {
      this.tail.next = this.head
    }

    return value
  }
}

const cLinkedList = new CircularLinkedList<string>()

console.log('------------ append ------------')
cLinkedList.append('aaa')
cLinkedList.append('bbb')
cLinkedList.append('ccc')
cLinkedList.traverse()

console.log('------------ insert ------------')
cLinkedList.insert('hhh', 0)
cLinkedList.insert('hxl', 1)
cLinkedList.insert('why', 3)
cLinkedList.insert('fuhuan', 6)
cLinkedList.traverse()

console.log('------------ removeAt ------------')
console.log(cLinkedList.removeAt(0))
console.log(cLinkedList.removeAt(3))
cLinkedList.traverse()

console.log('------------ get ------------')
console.log(cLinkedList.get(0))
console.log(cLinkedList.get(1))
console.log(cLinkedList.get(2))

console.log('------------ update ------------')
cLinkedList.update('abc', 1)
cLinkedList.update('cba', 3)
cLinkedList.traverse()

console.log('------------ indexOf ------------')
console.log(cLinkedList.indexOf('hxl'))
console.log(cLinkedList.indexOf('why'))
console.log(cLinkedList.indexOf('fuhuan'))

console.log('------------ remove ------------')
cLinkedList.remove('abc')
cLinkedList.remove('cba')
cLinkedList.traverse()

console.log('------------ isEmpty ------------')
console.log(cLinkedList.isEmpty())
