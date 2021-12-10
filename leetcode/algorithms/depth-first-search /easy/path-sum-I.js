//112
/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

//Runtime - O(n)
var hasPathSum = function(root, targetSum) {
    function helper(root, targetSum) {
        if (!root) return false;
        if (!root.left && !root.right) {
            return targetSum === root.val;
        }
        return helper(root.left, targetSum-root.val) || helper(root.right, targetSum-root.val) 
    }
    return helper(root, targetSum)
}


// This solution, though is faster than most solutions on leetcode, is actually wrong because it does not pass the test case where you have negative values. For example, binary tree = [1, null, 2, null, -2], and target sum is 1, this is supposed to return true but this solution returns false.
//  var hasPathSum = function(root, targetSum) {
//     //if root is empty, return false
//     if (root === null) return false;
//     //if targetSum and root value are the same and there are no children nodes to visit, then return true. If there are more nodes to visit, then return false
//     if (targetSum == root.val) {
//         if (root.left === null && root.right === null) {
//             return true
//         } 
//         if (root.left === null || root.right === null) {
//             return false
//         }
//     }
//     //calling function on right and left subtrees recursively
//     return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val)
// }


