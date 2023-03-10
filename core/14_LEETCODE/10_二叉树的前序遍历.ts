import TreeNode from './TreeNode'

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  recursion(root)
  function recursion(node: TreeNode | null) {
    if (!node) return

    result.push(node.val)
    recursion(node.left)
    recursion(node.right)
  }

  return result
}

function preorderTraversal2(root: TreeNode | null): number[] {
  const result: number[] = []
  const stack: (TreeNode | null)[] = [root]

  while (stack.length) {
    const node = stack.pop()
    if (!node) continue

    result.push(node.val)

    stack.push(node.right)
    stack.push(node.left)
  }

  return result
}
