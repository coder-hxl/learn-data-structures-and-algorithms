import { testSort, measureSort } from 'hy-algokit'

function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr

  // 1.分解(divide)
  // 1.1.分割数组
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  // 1.2.递归的切割 leftArr 和 rightArr
  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)

  // 2.合并
  // 2.1.定义双指针, 循环判断大小
  const newArr: number[] = []
  let i = 0
  let j = 0
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i])
      i++
    } else {
      newArr.push(newRightArr[j])
      j++
    }
  }

  // 2.2.判断数组是否还剩余元素
  // 左边
  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i))
  }

  // 右边
  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j))
  }

  // 3.将合并后的数组返回
  return newArr
}

testSort(mergeSort)
measureSort(mergeSort)
