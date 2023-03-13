function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  // 记录每个组的最小值
  const tails: number[] = []

  for (let i = 0; i < n; i++) {
    const num = nums[i]

    let left = 0
    let right = tails.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (tails[mid] >= num) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    // 是否找到对应位置
    if (left === tails.length) {
      tails.push(num)
    } else {
      tails[left] = num
    }
  }

  return tails.length
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))

export {}
