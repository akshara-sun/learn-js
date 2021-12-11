//98. 
/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

//Optimal solution 
//Runtime - O(n)
var isValidBST = function(root) {
    if (!root) {
        return true; 
    }

    function helper(root, min, max) {
        if (!root) {
            return true; 
        }
        if ((root.val <= min) || (root.val >= max)) {
            return false; 
        }
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    
    return helper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    
};

/*
Pseudo code (Most optimal solution)
1. If root is empty or has no children, return true
2. The max value that should be in the left subtrees should not be greater than the root of the whole bst 
3. The min value that should be in the right subtrees should not be less than the root of the whole bst. 
4. Create a helper function that keeps track of the min and max values for either side of the tree.
5. Helper function takes the following parameters: root, min, max
 - in the initial call, min and max are null 
 - checks for min and max
    - when checking left subtree, max cannot be greater than the current root value
    - when checking right subtree, min cannot be less than the current root value
*/
