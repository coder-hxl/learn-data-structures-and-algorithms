import TreeNode from './TreeNode'

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  function traverse(node: TreeNode | null) {
    if (!node) return

    traverse(node.left)
    traverse(node.right)
    result.push(node.val)
  }
  traverse(root)

  return result
}

function postorderTraversal2(root: TreeNode | null): number[] {
  const result: number[] = []
  const stack: (TreeNode | null)[] = []

  if (root) {
    stack.push(root)
  }

  while (stack.length) {
    const node = stack.pop()!
    result.push(node.val)

    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return result.reverse()
}
