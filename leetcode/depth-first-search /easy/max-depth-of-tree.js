//104.

//Given the root of a binary tree, return its maximum depth.
//A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 const helper = function (node) {
    if (!node) return [true, 0];
    if (!node.left && !node.right) {
        return [true, 1]
    }
    
    let leftIsBalanced, leftHeight, rightIsBalanced, rightHeight;
    let x = helper(node.left)
    let y = helper(node.right)
    
    leftIsBalanced = x[0]
    leftHeight = x[1]
    rightIsBalanced = y[0]
    rightHeight = y[1]
    
    //check
    if (!leftIsBalanced || !rightIsBalanced) {
        return [false, null]
    }
    
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return [false, null]
    }
    return [true, Math.max(leftHeight, rightHeight) + 1]
}

var isBalanced = function(root) {
    return helper(root)[0];
};



/*
HELPER METHOD
Base cases:
1. if tree is null, return true and 0
2. if node is a leaf, return true and 1

Recursion:
1. is left subtree balanced?
-> if false, return false and null
2. is right subtree balanced?
-> if false, return false and null
3. if both subtrees are true, check depth diff 
4. if depth diff > 1, return false
5. otherwise, return true, depth

*/
