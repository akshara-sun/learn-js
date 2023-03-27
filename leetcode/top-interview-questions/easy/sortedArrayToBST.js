/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.
*/

const sortedArrayToBST = (nums) => {
  // if nums array has length of 1:
  if (nums.length === 1) return new TreeNode(nums[0]);
  // if nums array has nothing:
  if (nums.length === 0) return null;

  // find middle element of array
  let middleIndex = Math.floor(nums.length / 2);
  let rootOfTree = new TreeNode(nums[middleIndex]);

  // left subtree
  let leftSubTree = nums.slice(0, middleIndex);
  rootOfTree.left = sortedArrayToBST(leftSubTree);

  //right subtree
  let rightSubTree = nums.slice(middleIndex + 1, nums.length);
  rootOfTree.right = sortedArrayToBST(rightSubTree);

  return rootOfTree;
};
