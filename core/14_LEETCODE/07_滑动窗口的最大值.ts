function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length

  // 双端队列结构
  const deque: number[] = []
  const res: number[] = []

  for (let i = 0; i < n; i++) {
    // 将元素放入尾部 (双端队列保留目前最大的元素)
    while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
      deque.pop()
    }
    deque.push(i)

    // 删掉不在窗口范围的元素
    if (deque[0] <= i - k) {
      deque.shift()
    }

    // 头部值为最大值
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }

  return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
