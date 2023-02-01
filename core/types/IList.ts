export default interface IList<T> {
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
}
