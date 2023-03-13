function lengthOfLIS(nums: number[]): number {
  const n = nums.length

  // 1.定义状态 dp 和 2.初始化状态
  const dp: number[] = Array(n).fill(1)

  // 3.状态转移方程
  let max = 1
  for (let i = 1; i < n; i++) {
    // 和前面的元素对比，找到比自己小的元素
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // 状态转移方程
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    max = Math.max(max, dp[i])
  }

  // 4.计算最终结果
  return max
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))

export {}
