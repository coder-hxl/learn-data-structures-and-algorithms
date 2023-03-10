import TreeNode from './TreeNode'

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const reslut: number[][] = []
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const level: number[] = []
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    reslut.push(level)
  }

  return reslut
}
