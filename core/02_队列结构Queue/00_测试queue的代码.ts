import ArrayQueue from './01_实现队列结构Queue'

const strQueue = new ArrayQueue<string>()

strQueue.enqueue('aaa')
strQueue.enqueue('bbb')
strQueue.enqueue('ccc')

console.log(strQueue.peek())

console.log(strQueue.dequeue())
console.log(strQueue.dequeue())
console.log(strQueue.dequeue())

console.log(strQueue.isEmpty())
console.log(strQueue.size())
