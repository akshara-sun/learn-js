//113.
/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
*/

 var pathSum = function(root, targetSum) {
    let resArr = [];
    let pathArr = [];
    function helper(root, targetSum, resArr, pathArr) {
        if (!root) return;
        if (!root.left && !root.right) {
            if (targetSum === root.val) {
                pathArr.push(root.val);
                resArr.push([...pathArr]);
                pathArr.pop();
                return;
            }
        }
        pathArr.push(root.val)
        helper(root.left, targetSum - root.val, resArr, pathArr);
        helper(root.right, targetSum - root.val, resArr, pathArr);
        pathArr.pop()
    }
    helper(root, targetSum, resArr, pathArr)
    return resArr;
};