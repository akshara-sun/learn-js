/*Given the head of a linked list, remove the nth node from the end of the list and return its head.*/

//Solution 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Solution - n = size of list, k = k from n; runtime = O(n), space complexity O(1)
 function getLengthOfList (head) {
    let count = 0;
    for (let curr = head; curr !== null; curr = curr.next) {
        count++
    }
    return count;
    
}


var removeNthFromEnd = function(head, n) {
    let length = getLengthOfList(head);
    let curr;
    let idx;
    let diff = length - n;
    for (curr = head, idx = 0; idx < diff-1; curr = curr.next, idx++);
    if (diff == 0) {
        return curr.next;
    } else {
        curr.next = curr.next.next;
        return head;
    }
};