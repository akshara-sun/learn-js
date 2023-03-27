// 142
/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
*/

const detectCycle = (head) => {
  // create a set so that if we are visiting a node that's already in the set, we know that we found a cycle.
  // once we find that, we can return that node

  let visited = new Set();
  let currentNode = head;

  while (currentNode && !visited.has(currentNode)) {
    visited.add(currentNode);
    currentNode = currentNode.next;
  }

  return currentNode;
};
