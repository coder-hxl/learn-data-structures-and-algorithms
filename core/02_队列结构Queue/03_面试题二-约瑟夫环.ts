import ArrayQueue from './01_实现队列结构Queue'

function lastRemaining(value: number, num: number) {
  const queue = new ArrayQueue<number>()

  for (let i = 0; i < value; i++) {
    queue.enqueue(i)
  }

  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }

  return queue.dequeue()
}

console.log(lastRemaining(12, 3))
console.log(lastRemaining(5, 3))
