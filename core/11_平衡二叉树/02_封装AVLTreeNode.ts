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
}

const avlNode1 = new AVLTreeNode(20)
avlNode1.left = new AVLTreeNode(10)
avlNode1.left.left = new AVLTreeNode(5)

console.log('------------ getHeight ------------')
console.log(avlNode1.getHeight())
console.log(avlNode1.left.getHeight())

console.log('------------ getBalanceFactor ------------')
console.log(avlNode1.getBalanceFactor())
console.log(avlNode1.left.getBalanceFactor())

console.log('------------ isBalance ------------')
console.log(avlNode1.isBalance)
console.log(avlNode1.left.isBalance)

console.log('------------ higherChild ------------')
console.log(avlNode1.higherChild)
