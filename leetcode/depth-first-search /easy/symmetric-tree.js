//101
/* Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). */

 var isSymmetric = function(root) {
     //if root node is null, return true
    if (!root) return true;

    //call helper function recursively
    return visitNodes(root.left, root.right)   
};

function visitNodes(node1, node2) {
    //if both node 1 & 2 are null, return true
    if (!node1 && !node2) return true;
    //if only one of them is null, return false 
    if (!node1 || !node2 ) return false;
    //if both nodes have different values, return false
    if (node1.val !== node2.val) return false;
    //returns booleans when the function is called on the node 1 & 2's subordinate nodes
    return visitNodes(node1.left, node2.right) && visitNodes(node1.right, node2.left)

}