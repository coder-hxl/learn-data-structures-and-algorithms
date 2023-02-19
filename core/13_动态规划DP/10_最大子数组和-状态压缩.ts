function maxArray(nums: number[]) {
  const n = nums.length

  // 1.定义状态 和 2.初始化状态
  let prev = nums[0]
  let max = prev

  for (let i = 1; i < n; i++) {
    // 3.状态转换方程: dp[i] = max(nums[i], nums[i] + dp[i - 1])
    prev = Math.max(nums[i], nums[i] + prev)
    max = Math.max(max, prev)
  }

  return max
}

console.log(maxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

export {}
