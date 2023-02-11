import IList from '../types/IList'

export default interface ILinkedList<T> extends IList<T> {
  append(value: T): void
  traverse(): void
  insert(value: T, position: number): boolean
  removeAt(position: number): T | null
  get(position: number): T | null
  update(value: T, position: number): boolean
  indexOf(value: T): number
  remove(value: T): T | null
}
