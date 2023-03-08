import TreeNode from './TreeNode'

function flatten(root: TreeNode | null): void {
  if (!root) return

  const stack = [root]
  let prev: TreeNode | null = null

  while (stack.length) {
    const curr = stack.pop()!

    if (prev) {
      prev.left = null
      prev.right = curr
    }

    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)

    prev = curr
  }
}
