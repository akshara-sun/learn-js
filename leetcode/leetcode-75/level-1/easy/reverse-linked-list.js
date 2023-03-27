// 206
// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (head) => {
  let previous = null;
  let current = head;
  while (current) {
    // next pointer that points to next node
    let next = current.next;
    // current node points to previous node
    current.next = previous;
    // move previous pointer to current node
    previous = current;
    // move current pointer to next node
    current = next;
  }
  // head should point to previous
  head = previous;
  // return head
  return head;
};
