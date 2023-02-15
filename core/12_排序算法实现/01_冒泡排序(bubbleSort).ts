import { swap, measureSort, testSort } from 'hy-algokit'
// import { swap } from './utils'

function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  // 外循环
  for (let i = 0; i < n; i++) {
    // 内循环: 两两比较, 将最大值放置最后
    let swapped = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr
}

// console.log(bubbleSort([12, 32, 11, 4, 43, 14]))

testSort(bubbleSort)
measureSort(bubbleSort)
