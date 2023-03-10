import ListNode from './ListNode'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 1.创建虚拟节点
  const dummp = new ListNode()
  dummp.next = head

  // 2.创建双指针 (快慢)
  let fast = dummp
  let slow = dummp

  // 3.将快指针移到第 n + 1 位
  for (let i = 0; i <= n; i++) {
    fast = fast.next!
  }

  // 4.两个指针一起移动
  while (fast) {
    slow = slow.next!
    fast = fast.next!
  }

  // 5. slow 指向要删除节点的前一个节点
  slow.next = slow.next!.next

  return dummp.next
}
