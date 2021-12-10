//98. 
/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
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
 * @return {boolean}
 */

//Naively implemented solution - this solution is straightforward - it's a DFS algorithm that recursively checks the left subtrees if the values of those subtrees are less than the root node and checks the right when there is no left node to check and returns true if the right subtrees are greater in value than the root node. Though this may work for a few test cases, you can have subtrees on either side of the tree that pass this condition but not the whole tree itself. For example, if the input is: [5,1,6, null, null, 3, 7]. In this example, not all the values on the right subtree is greater than the root node, which has a value of 5. The node with value 6 has a left child node with a value 3, which satisfies the condition that the left subtree should be less than its parent but it does not take into account that it's part of the right subtree of the root of the binary tree, which has a value of 5. Therefore, when this tree is passed into the function, the output must be false. 

/*
Pseudo Code (Naïve solution)
1. If root is empty, return true
2. If root has no children, return true
3. If root has a left, check its value 
 - if value is less than root, recursively call function on left subtree 
4. If root does not have a left, check if it has right 
5. If root has a right, check it's value 
- if value is greater than root, recursively call function on the right subtree 
- if the above conditions are not both true, return false
- return true
*/

// var isValidBST = function(root) {
//     let curr;
//     let validation;
//     if (!root) {
//         return true;
//     }
//     if (!root.left && !root.right) {
//         return true
//     }
    
//     curr = root.left;
//     if (curr) {
//         if (curr.val < root.val) {
//             validation = true;
//             isValidBST(curr)
//         }
//     } else {
//         curr = root.right;
//         if (curr) {
//             if (curr.val > root.val) {
//                 validation = true;
//                 isValidBST(curr)  
//             }
//         }
//         return false;
//     }
//     return validation;
// };

//In order to account for the missing case in the naïve solution, the following modifications will have to be made in our pseudo code.
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

