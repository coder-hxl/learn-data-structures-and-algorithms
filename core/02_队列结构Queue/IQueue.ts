import IList from '../types/IList'

export default interface IQueue<T> extends IList<T> {
  enqueue(value: T): void
  dequeue(): T | undefined
}
