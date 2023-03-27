//21.
/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  // intialize variable for a new LL
  let mergedList = new ListNode();
  // indicate head of list
  let mergedListHead = mergedList;
  // indicate the heads of the two lists
  let list1Head = list1;
  let list2Head = list2;

  // if both lists are empty, return null
  if (!list1Head && !list2Head) {
    return mergedList.next;
  }
  // while the two list heads aren't null
  while (list1Head && list2Head) {
    // if value in list1 head <= value in list 2 head, push it merged list
    if (list1Head.val < list2Head.val) {
      mergedList.next = list1Head;
      // move list1Head to the next value in the list
      list1Head = list1Head.next;
    } else {
      // otherwise, push value in list2Head to merged list
      mergedList.next = list2Head;
      list2Head = list2Head.next;
    }
    // start the linkedList from the second node since the first one was a dummy node we created when we intialized the list
    mergedList = mergedList.next;
  }
  if (list1Head && !list2Head) {
    mergedList.next = list1Head;
  }
  if (!list1Head && list2Head) {
    mergedList.next = list2Head;
  }
  // return second node in mergedList since when we initialized it, we created a dummy node that wasn't a part of the provided linked lists
  return mergedListHead.next;
};
