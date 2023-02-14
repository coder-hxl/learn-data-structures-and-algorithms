import { BSTree } from './01_二叉搜索树BSTree'
import AVLTreeNode from './04_封装AVLTreeNode(左旋转)'

class AVLTree<T> extends BSTree<T> {
  /* 重写 createNode 方法 */
  protected createNode(value: T): AVLTreeNode<T> {
    return new AVLTreeNode(value)
  }

  /* 重写 checkBalance 方法 */
  protected checkBalance(node: AVLTreeNode<T>, isAdd = true): void {
    let current = node.parent
    while (current) {
      if (!current.isBalance) {
        // 不平衡
        this.rebalance(current)

        // 决定会不会继续查找父节点是否平衡
        // 添加情况是不需要继续向上查找, 直接 break
        // 删除情况是需要继续向上查找, 不能break
        if (isAdd) break
      }
      current = current.parent
    }
  }

  /* 根据不平衡节点的情况(LL/RR/LR/RL)让子树平衡 */
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild
    const current = pivot?.higherChild

    let resultNode: AVLTreeNode<T> | null = null

    if (pivot?.isLeft) {
      if (current?.isLeft) {
        // LL
        resultNode = root.rightRotation()
      } else {
        // LR
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
    } else {
      if (current?.isRight) {
        // RR
        resultNode = root.leftRotation()
      } else {
        // RL
        pivot?.rightRotation()
        resultNode = root.leftRotation()
      }
    }

    // 判断返回的 pivot 是否有父节点
    if (!resultNode.parent) {
      this.root = resultNode
    }
  }
}

const avlTree = new AVLTree<number>()

console.log('------------------- insert -------------------')
avlTree.insert(20)
avlTree.insert(30)
avlTree.insert(10)
avlTree.insert(105)
avlTree.insert(15)
avlTree.insert(5)
avlTree.insert(90)
avlTree.insert(100)
avlTree.insert(125)
avlTree.insert(110)
avlTree.insert(95)
avlTree.insert(115)
avlTree.print()

console.log('------------------- remove 20 -------------------')
avlTree.remove(20)
avlTree.print()

console.log('------------------- remove 5 -------------------')
avlTree.remove(5)
avlTree.print()

console.log('------------------- remove 15 -------------------')
avlTree.remove(15)
avlTree.print()

console.log('------------------- remove 30 -------------------')
avlTree.remove(30)
avlTree.print()
