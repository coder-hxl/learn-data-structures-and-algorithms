import TreeNode from './TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root

  const leftNode = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(leftNode)

  return root
}

function invertTree2(root: TreeNode | null): TreeNode | null {
  if (!root) return root

  const stack: TreeNode[] = [root]
  while (stack.length) {
    const node = stack.pop()!
    const temp = node.left
    node.left = node.right
    node.right = temp
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return root
}
