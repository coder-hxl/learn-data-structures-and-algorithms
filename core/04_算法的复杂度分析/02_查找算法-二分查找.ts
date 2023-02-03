function binarySearch(arr: number[], num: number) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    const midNum = arr[mid]
    if (midNum === num) {
      return mid
    } else if (midNum < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

console.log(binarySearch([1, 23, 54, 74, 100, 222, 304], 222))

export default binarySearch
