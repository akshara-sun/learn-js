//938.
/* 
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

//Runtime = O(n)
 var rangeSumBST = function(root, low, high) {
    let res = 0;
    if (!root) return res;
    //condition in which the node you are checking is equal to the given low and high parameters
    if (root.val >= low && root.val <= high) {
        res += root.val
    }
    //condition in which you look for values that are between the given low and high (non-inclusive)
    if (root.val > low) {
        res += rangeSumBST(root.left, low, high)
    }
    if (root.val < high) {
        res += rangeSumBST(root.right, low, high)
    }
    return res
};
