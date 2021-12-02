//111.
/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.
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
 * @return {number}
 */

//runtime = O(n)
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }
    
    let leftDepth = minDepth(root.left)
    let rightDepth = minDepth(root.right)
    
    if (leftDepth == 0) {
        return rightDepth + 1
    } else if (rightDepth == 0) {
        return leftDepth + 1;
    } 
    return Math.min(leftDepth, rightDepth) + 1
};

/*
pseudo code
base cases:
- if node is null, return 0
- only one node, return 1

recursion:
- call fn on left subtree 
- call fn on right subtree
- compare depths to find the smallest depth and add 1 to it and return 
*/