import { btPrint } from 'hy-algokit'
import { TreeNode } from './01_二叉搜索树BSTree'

class AVLTreeNode<T> extends TreeNode<T> {
  // 保证类型是 AVLTreeNode
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  /* 获取每个节点的高度 */
  getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return Math.max(leftHeight, rightHeight) + 1
  }

  /* 权重: 平衡因子(leftHeight - rightHeight) */
  getBalanceFactor(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return leftHeight - rightHeight
  }

  /* 直接判断当前节点是否平衡 */
  get isBalance(): boolean {
    const factor = this.getBalanceFactor()

    return factor >= -1 && factor <= 1 // -1 0 1
  }

  /* 获取更高子节点 */
  get higherChild(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    if (leftHeight > rightHeight) return this.left
    if (leftHeight < rightHeight) return this.right
    return this.isLeft ? this.left : this.right
  }

  /* 左左情况(右旋转) */
  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理 pivot 节点
    const pivot = this.left!
    pivot.parent = this.parent

    // 2.处理 pivot 的 right
    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this
    }

    // 3.处理 this
    pivot.right = this
    this.parent = pivot

    // 4.挂载 pivot
    if (!pivot.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else if (isRight) {
      pivot.parent.right = pivot
    }

    return pivot
  }
}

const avlNode1 = new AVLTreeNode(20)
avlNode1.left = new AVLTreeNode(10)
avlNode1.left.parent = avlNode1
avlNode1.left.left = new AVLTreeNode(5)
avlNode1.left.left.parent = avlNode1.left

const parent = new AVLTreeNode(30)
parent.left = avlNode1
avlNode1.parent = parent

btPrint(parent)

console.log('------------ rightRotation ------------')
btPrint(avlNode1.rightRotation().parent)
