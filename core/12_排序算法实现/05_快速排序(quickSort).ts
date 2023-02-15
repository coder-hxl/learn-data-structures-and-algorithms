import { testSort, measureSort, swap } from 'hy-algokit'

function quickSort(arr: number[]): number[] {
  function partition(left: number, right: number) {
    if (left >= right) return

    // 1.找基准元素
    const pivot = arr[right]

    // 2.定义双指针进行交换(左边是比 pivot 小的数字, 右边是比 pivot 大的数字)
    let i = left
    let j = right - 1
    while (i <= j) {
      // 找大于 pivot
      while (arr[i] < pivot) {
        i++
      }

      // 找小于 pivot
      while (arr[j] > pivot) {
        j--
      }

      // 已经找到, 交换位置
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    // 3.将 pivot 放到正确位置
    swap(arr, i, right)

    // 4.左右划分区域
    partition(left, j)
    partition(i + 1, right)
  }

  partition(0, arr.length - 1)

  return arr
}

testSort(quickSort)
measureSort(quickSort)
