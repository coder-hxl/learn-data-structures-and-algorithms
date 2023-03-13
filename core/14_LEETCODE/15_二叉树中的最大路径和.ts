import TreeNode from './TreeNode'

function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity

  // 深度递归获取
  function dfs(node: TreeNode | null) {
    if (!node) return 0

    // 左右子树提供的非 0 最大值
    const leftSum = Math.max(dfs(node.left), 0)
    const rightSum = Math.max(dfs(node.right), 0)

    // 当前节点中能够获得的最大值
    const pathSum = node.val + leftSum + rightSum
    maxSum = Math.max(maxSum, pathSum)

    // 返回当前节点能给父节点提供的最大值
    return node.val + Math.max(leftSum, rightSum)
  }

  dfs(root)

  return maxSum
}
