import { compareSort } from 'hy-algokit'

import bubbleSort from './01_冒泡排序(bubbleSort)'
import selectionSort from './02_选择排序(selectionSort)'
import insertionSort from './03_插入排序(insertionSort)'
import mergeSort from './04_归并排序(mergeSort)'
import quickSort from './05_快速排序(quickSort)'
import heapSort from './06_堆排序(heapSort)'
import shellSort from './07_希尔排序(shellSort)'

compareSort(
  [
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    heapSort,
    shellSort
  ],
  100000
)
