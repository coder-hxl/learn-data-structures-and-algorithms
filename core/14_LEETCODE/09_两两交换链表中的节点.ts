import ListNode from './ListNode'

function swapPairs(head: ListNode | null): ListNode | null {
  // 1.创建虚拟节点
  const dummy = new ListNode(0, head)

  // 2.创建 current 节点指向虚拟节点
  let current = dummy
  while (current.next && current.next.next) {
    // 取出要交换的两个节点
    const node1 = current.next
    const node2 = current.next.next

    // 两两交换
    node1.next = node2.next
    node2.next = node1
    current.next = node2

    // 开始下一轮交换
    current = node1
  }

  return dummy.next
}
