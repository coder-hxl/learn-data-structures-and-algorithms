import { testSort, swap, measureSort } from 'hy-algokit'

export default function heapSort(arr: number[]): number[] {
  const n = arr.length

  // 1.原地建堆
  // 从第一个非叶子节点开始下滤
  const startIndex = Math.floor(n / 2 - 1)
  for (let i = startIndex; i >= 0; i--) {
    heapify_down(arr, n, i)
  }

  // 2.对最大堆进行排序
  // 取出每次最大值
  for (let i = n - 1; i >= 0; i--) {
    swap(arr, 0, i)
    heapify_down(arr, i, 0)
  }

  return arr
}

function heapify_down(arr: number[], n: number, index: number) {
  while (index * 2 + 1 < n) {
    // 1.获取子左右索引
    const leftChildIndex = index * 2 + 1
    const rightChildIndex = index * 2 + 2

    // 2.获取子值最大的索引
    let maxIndex = leftChildIndex
    if (rightChildIndex < n && arr[leftChildIndex] < arr[rightChildIndex]) {
      maxIndex = rightChildIndex
    }

    // 3.比较 index 和 maxIndex
    if (arr[index] > arr[maxIndex]) {
      break
    }

    // 4.交换位置
    swap(arr, index, maxIndex)
    index = maxIndex
  }
}

testSort(heapSort)
measureSort(heapSort)
