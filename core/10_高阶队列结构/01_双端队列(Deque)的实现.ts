import ArrayQueue from '../02_队列结构Queue/01_实现队列结构Queue'

class Deque<T> extends ArrayQueue<T> {
  addFront(value: T) {
    this.data.unshift(value)
  }

  removeBack(): T | undefined {
    return this.data.pop()
  }
}

const deque = new Deque()
deque.enqueue('aaa')
deque.enqueue('bbb')
deque.enqueue('ccc')
deque.addFront('abc')
deque.addFront('cba')

while (!deque.isEmpty()) {
  console.log(deque.removeBack())
}
