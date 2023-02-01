import IList from '../types/IList'

export default interface IStack<T> extends IList<T> {
  push(value: T): void
  pop(): T | undefined
}
