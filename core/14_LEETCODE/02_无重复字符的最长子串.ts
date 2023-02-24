function lengthOfLongestSubstring(s: string): number {
  const n = s.length

  const map = new Map<string, number>()
  let maxLength = 0
  let left = 0
  for (let right = 0; right < n; right++) {
    const rightChar = s[right]

    // 判断当前字符是否已经存在过
    if (map.has(rightChar) && map.get(rightChar)! >= left) {
      left = map.get(rightChar)! + 1
    }

    // 保存最新索引
    map.set(rightChar, right)
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb'))
