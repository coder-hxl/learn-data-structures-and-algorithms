function longestCommonPrefix(strs: string[]): string {
  const n = strs.length

  if (n <= 0) return ''

  let prefix = strs[0]
  for (let i = 1; i < n; i++) {
    const s = strs[i]
    while (s.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1)
    }

    if (!prefix.length) {
      return ''
    }
  }

  return prefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['abc', 'abd', 'aaa', 'axx']))
