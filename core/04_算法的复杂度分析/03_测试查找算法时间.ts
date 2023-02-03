import { testOrderSearchEfficiency } from 'hy-algokit'

import sequentSearch from './01_查找算法-顺序查找'
import binarySearch from './02_查找算法-二分查找'

const arr = new Array(1000000).fill(0).map((_, i) => i)
const num = arr.length / 2

const startTime = performance.now()
// const index = sequentSearch(arr, num)
const index = binarySearch(arr, num)
const endTime = performance.now()
console.log(`索引位置: ${index}, 消耗时间: ${endTime - startTime}`)

// 用工具测试
testOrderSearchEfficiency(sequentSearch)
testOrderSearchEfficiency(binarySearch)
