import { measureSort, testSort } from 'hy-algokit'

export default function shellSort(arr: number[]): number[] {
  const n = arr.length

  // 选择不同增量(步长/间隔)
  let gap = Math.floor(n / 2)

  // 1.第一层循环: 不断改变步长
  while (gap > 0) {
    // 2.第二层循环: 找到不同的数列集合进行插入排序
    for (let i = gap; i < n; i++) {
      let j = i
      const num = arr[i]

      // 3.第三层循环: 对数列进行插入排序
      // 向前去找比 num 大的值
      while (j > gap - 1 && num < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j -= gap
      }

      arr[j] = num
    }

    gap = Math.floor(gap / 2)
  }

  return arr
}

testSort(shellSort)
measureSort(shellSort)
