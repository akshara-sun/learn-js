//897.
/* Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.*/


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
 * @return {TreeNode}
 */

//Runtime - O(n) 
var increasingBST = function(root) {
    let result = [];
    
    let checker = (node) => {
        if (!node)  return result;
        checker(node.left)
        result.push(node.val)
        checker(node.right)
    }
    
    checker(root);
    // console.log(result); // [1,2,3,4,5,6,7,8,9]
    
    let tempRoot = new TreeNode(0);
    let newRoot = tempRoot;
    for (let i = 0; i < result.length; i++) {
        tempRoot.right = new TreeNode(result[i])
        tempRoot = tempRoot.right;
    }
    return newRoot.right;
};

/*
Pseudo code:
1. Helper function: In-order traversal to get the order of node values from least to greatest 
2. Create new tree and assign all the values of in the result array as right children
 - temporary new root node - tempRoot
 - loop through the array in which the node values are stored from least to greatest 
 - starting at tempRoot.right -> make nodes out of arr values (must all be right children)
 - change the tempRoot from the temp node to the it's right child
 - return new tree
*/