import ListNode from './面试题_ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  let newHead: ListNode | null = null
  while (head) {
    const current: ListNode | null = head.next
    head.next = newHead
    newHead = head
    head = current
  }

  return newHead
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
