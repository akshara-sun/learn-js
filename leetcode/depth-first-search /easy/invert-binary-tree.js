//226.
//Given the root of a binary tree, invert the tree, and return its root.

 var invertTree = function(root) {
    if (root == null) {
        return null;
    }
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.left)
    invertTree(root.right)
    return root;
};