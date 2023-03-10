import TreeNode from './TreeNode'

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  function traverse(node: TreeNode | null) {
    if (!node) return

    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }
  traverse(root)

  return result
}

function inorderTraversal2(root: TreeNode | null): number[] {
  const result: number[] = []
  const stack: (TreeNode | null)[] = []

  let current = root
  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    const node = stack.pop()!
    result.push(node.val)
    current = node.right
  }

  return result
}
