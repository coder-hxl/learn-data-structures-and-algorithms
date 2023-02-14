import { btPrint } from 'hy-algokit'

import Node from '../types/Node'

export class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  // 父节点
  parent: TreeNode<T> | null = null

  get isLeft(): boolean {
    return this.parent?.left === this
  }

  get isRight(): boolean {
    return this.parent?.right === this
  }
}

export class BSTree<T> {
  protected root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    while (current) {
      // 1.找到直接返回
      if (current.value === value) return current

      // 2.继续往下找
      const parent = current
      if (current.value > value) {
        current = current.left
      } else if (current.value < value) {
        current = current.right
      }

      // current 有值就保存父节点
      if (current) current.parent = parent
    }

    return null
  }

  protected createNode(value: T): TreeNode<T> {
    return new TreeNode(value)
  }

  protected checkBalance(node: TreeNode<T>, isAdd = true) {}

  /* 插入操作 */
  // 插入
  insert(value: T) {
    // 1.根据 value 创建新节点
    const newNode = this.createNode(value)

    // 2.判断是否有根节点
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertValue(this.root, newNode)
      // 检测树是否平衡
      this.checkBalance(newNode)
    }
  }
  private insertValue(node: TreeNode<T>, newNode: TreeNode<T>) {
    // 根据大小, 查找空白位置插入新节点
    if (node.value > newNode.value) {
      if (node.left) {
        this.insertValue(node.left, newNode)
      } else {
        node.left = newNode
        newNode.parent = node
      }
    } else {
      if (node.right) {
        this.insertValue(node.right, newNode)
      } else {
        node.right = newNode
        newNode.parent = node
      }
    }
  }

  /* 遍历操作 */
  // 先序遍历
  perOrderTraverse() {
    this.perOrderTraverseNode(this.root)
  }
  private perOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return

    console.log(node.value)
    this.perOrderTraverseNode(node.left)
    this.perOrderTraverseNode(node.right)
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return

    this.postOrderTraverseNode(node.left)
    this.postOrderTraverseNode(node.right)
    console.log(node.value)
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return

    this.inOrderTraverseNode(node.left)
    console.log(node.value)
    this.inOrderTraverseNode(node.right)
  }

  // 层序遍历
  levelOrderTraverse() {
    // 1.没有 root 直接退出
    if (!this.root) return

    // 2.创建队列
    const queue = [this.root]

    // 3.依次出队, 再将左右节点传入
    while (queue.length) {
      const current = queue.shift()
      console.log(current?.value)

      if (current?.left) queue.push(current.left)

      if (current?.right) queue.push(current.right)
    }
  }

  /* 获取最值操作 */
  // 最大值
  getMaxValue(): T | null {
    if (!this.root) return null

    let current = this.root
    while (current.right) {
      current = current.right
    }

    return current.value
  }

  // 最小值
  getMinValue(): T | null {
    if (!this.root) return null

    let current = this.root
    while (current.left) {
      current = current.left
    }

    return current.value
  }

  // 查找
  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  // 删除
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取右子树
    let current = delNode.right
    let successor: TreeNode<T> | null = null
    while (current) {
      successor = current
      current = current.left

      if (current) current.parent = successor
    }

    // 拿到了后继节点
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right
      if (successor?.right) {
        successor.right.parent = successor.parent
      }
    } else {
      delNode.right = successor!.right
      if (successor?.right) {
        successor.right.parent = delNode
      }
    }

    return successor!
  }
  remove(value: T): boolean {
    // 1.搜索该节点是否存在
    const current = this.searchNode(value)
    if (!current) return false

    let replaceNode: TreeNode<T> | null = null
    // 2.获取三个东西: 当前节点/父节点/属于父节点的哪边节点
    // 叶子节点/一个子节点/两个子节点
    if (!current.left && !current.right) {
      replaceNode = null
    } else if (!current.left) {
      replaceNode = current.right
    } else if (!current.right) {
      replaceNode = current.left
    } else {
      const successor = this.getSuccessor(current)
      current.value = successor.value
      // 删除完成后, 检测树是否平衡(将删除节点传入)
      this.checkBalance(successor)
      return true
    }

    if (current === this.root) {
      this.root = replaceNode
    } else if (current.isLeft) {
      current.parent!.left = replaceNode
    } else {
      current.parent!.right = replaceNode
    }

    // 处理 replaceNode 父节点
    if (replaceNode && current.parent) {
      replaceNode.parent = current.parent
    }

    // 删除完成后, 检测树是否平衡(将删除节点传入)
    this.checkBalance(current, false)

    return true
  }
}
