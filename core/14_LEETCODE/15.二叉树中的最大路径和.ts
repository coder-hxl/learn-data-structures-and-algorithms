import TreeNode from "./TreeNode";

function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity
  
  function dfs(node: TreeNode | null) {
    if (!node) return 0
    
    // 左边提供的最大值
    const leftSum = Math.max(dfs(node.left), 0)
    // 右边提供的最大值
    const rightSum = Math.max(dfs(node.right), 0)
    
    // 加上自己的最大值
    const pathSum = node.val + leftSum + rightSum
    // 是否是目前找到的最大值
    maxSum = Math.max(maxSum, pathSum)
    
    // 将 自己 + 左/右 的最大值返回出去
    return node.val + Math.max(leftSum, rightSum)
  }
  
  dfs(root)
  
  return maxSum
}