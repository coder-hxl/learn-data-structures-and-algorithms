import { measureSort, swap, testSort } from 'hy-algokit'

function selectionSort(arr: number[]): number[] {
  const n = arr.length

  // 外循环: 找 n - 1 轮最小值
  for (let i = 0; i < n - 1; i++) {
    // 内循环: 从 i + 1 开始每次找到最小值
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    // 交换
    if (i !== minIndex) swap(arr, i, minIndex)
  }

  return arr
}

testSort(selectionSort)
measureSort(selectionSort)
