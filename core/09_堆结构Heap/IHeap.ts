import IList from '../types/IList'

export default interface IHeap<T> extends IList<T> {
  insert(value: T): void
  extract(): T | undefined
  buildHeap(arr: T[]): void
}
