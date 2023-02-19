function maxArray(nums: number[]) {
  // 1.定义状态 dp[i]
  // 以 i 位置的元素结尾的连续数组能获取到的最大值
  // 2.状态转移方程
  // dp[i] = max(nums[i], nums[i] + dp[i - 1])
  // 3.初始化状态 dp[0] = nums[0]
  // 4.最终值 遍历整个 dp 获取最大的值

  const n = nums.length

  // 1.定义状态
  const dp: number[] = []
  // 2.初始化状态
  dp.push(nums[0])
  for (let i = 1; i < n; i++) {
    // 3.状态转换方程: dp[i] = max(nums[i], nums[i] + dp[i - 1])
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
  }

  return Math.max(...dp)
}

console.log(maxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

export {}
