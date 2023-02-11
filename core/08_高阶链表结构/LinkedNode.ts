// 创建 Node 类
export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 创建 DoublyNode 类
export class DoublyNode<T> extends Node<T> {
  perv: DoublyNode<T> | null = null
  next: DoublyNode<T> | null = null
}
