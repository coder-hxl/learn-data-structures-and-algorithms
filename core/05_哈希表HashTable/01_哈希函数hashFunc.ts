/**
 * 哈希函数, 将 key 映射成 index
 * @param key 转换的 key
 * @param max 数组的长度(最大值)
 * @returns 索引值
 */
function hashFunc(key: string, max: number): number {
  // 1.计算 hashCode cats => 60337(27为底的时候)
  let hashCode = 0
  const length = key.length
  for (let i = 0; i < length; i++) {
    // 霍纳算法计算 hashCode 的值
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }

  // 2.求出索引值
  const index = hashCode % max

  return index
}

console.log(hashFunc('abc', 7))
console.log(hashFunc('cba', 7))
console.log(hashFunc('nba', 7))
console.log(hashFunc('aaa', 7))

export default hashFunc
