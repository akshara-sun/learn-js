/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
*/

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

//Helper method to calculate length of linked list - runtime = O(n)
function getListLength(head) {
    let length = 0;
    for (let curr = head; curr !== null; curr = curr.next) {
        length++
    }
    return length;
}

//Function that calculates the middle node and returns the second half (including middle node) of the linked list
var middleNode = function(head) {
    let length = getListLength(head);
    let midpoint = Math.floor(length/2);
    let curr;
    let index;
    if (length <= 1) {
        return head;
    } else {
        for (curr = head, index = 0; index < midpoint - 1; curr = curr.next, index++);
        head = curr.next;
    }
    return head;
};