import ArrayQueue from './01_实现队列结构Queue'

function hotPotato(names: string[], num: number): number {
  // 1.创建一个队列Queue
  const queue = new ArrayQueue<string>()

  // 2.将元素加到队列
  for (const item of names) {
    queue.enqueue(item)
  }

  // 3.进行淘汰
  while (queue.size() > 1) {
    // 通过将每次不为num的元素 移出并又添加 到队列
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    // 淘汰
    queue.dequeue()
  }

  // 4.拿到最后的一个人
  const name = queue.dequeue()!

  return names.indexOf(name)
}

console.log(hotPotato(['aaa', 'bbb', 'ccc', 'ddd', 'abc', 'cba', 'nba'], 3))
