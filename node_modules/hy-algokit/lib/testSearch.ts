export interface ISearchFunction {
  (arr: number[], target: number): number
}

export function testOrderSearchEfficiency(
  searchFn: ISearchFunction, 
  arr: number[] | null = null, 
  target: number = -1
) {
  let max = 0
  if (!arr) {
    max = 10000000
    arr = new Array(max).fill(0).map((_, i) => i)
    target = max / 2
  }

  const start = performance.now()
  const index = searchFn(arr, target)
  const end = performance.now()
  const time = end - start
  console.log(`数组长度:${max} - ${searchFn.name} 消耗时间: ${time}`)
}

export default testOrderSearchEfficiency
