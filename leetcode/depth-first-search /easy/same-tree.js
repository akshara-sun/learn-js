//100
/*Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

 var isSameTree = function(p, q) {
    //if the trees are both null, then return true
   if (!p && !q) {
       return true;
   }
    //if one of them is null and the other one isn't, return false
    if (!p && q || p && !q) {
        return false;
    }
    //if the value of one does not equal the value of the other, return false
    if (p.val !== q.val) {
        return false
    }
    //calling function on the left and right nodes
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
