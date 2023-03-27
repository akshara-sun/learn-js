/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
 */

const mergeTwoLists = (list1, list2) => {
  let mergedList = new ListNode();
  let head = mergedList;
  let current1 = list1;
  let current2 = list2;
  while (current1 && current2) {
    if (current1.val < current2.val) {
      mergedList.next = current1;
      current1 = current1.next;
    } else {
      mergedList.next = current2;
      current2 = current2.next;
    }
    mergedList = mergedList.next;
  }
  if (current1) {
    mergedList.next = current1;
  }
  if (current2) {
    mergedList.next = current2;
  }
  return head.next;
};
