import ListNode from './面试题_ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  // 数组模拟栈结构
  const stack: ListNode[] = []
  let stackNode: ListNode | null = head
  while (stackNode) {
    stack.push(stackNode)
    stackNode = stackNode.next
  }

  // 从栈中取出元素放到链表
  let newHeade = stack.pop()!
  let current = newHeade
  while (stack.length) {
    current = current.next = stack.pop() as ListNode
  }
  // 将最后一个节点指向 null
  current.next = null

  return newHeade
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newNode = reverseList(node1)

let current = newNode
while (current) {
  console.log(current.val)
  current = current.next
}

export {}
