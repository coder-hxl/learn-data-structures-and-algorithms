/**
 * 顺序查找算法
 * @param arr 查找的数组
 * @param num 查找的元素
 * @return 查找到的索引, 未找到返回 -1
 */
function sequentSearch(arr: number[], num: number) {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    const item = arr[i]
    if (item === num) {
      return i
    }
  }

  return -1
}

console.log(sequentSearch([1, 23, 54, 74, 100, 222, 304], 222))

export default sequentSearch
