//112
/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.
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

//SideNote: https://leetcode.com/problems/path-sum/discuss/1622609/Javascript-Solution-O(n)



