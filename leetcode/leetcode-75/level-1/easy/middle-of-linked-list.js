// 876
/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
*/

const middleNode = (head) => {
  let length = 0;
  let curr = head;
  let middleIndex = 0;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  if (length) {
    middleIndex = Math.ceil(length / 2);
  }

  let currentPosition = head;
  let previous = null;
  let currentIndex = 0;

  while (currentPosition && currentIndex !== middleIndex) {
    currentIndex++;
    previous = currentPosition;
    currentPosition = currentPosition.next;
  }
  head = previous;

  if (length % 2 !== 0) {
    return head;
  }
  return head.next;
};
