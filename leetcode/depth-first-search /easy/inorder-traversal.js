//Read about the different types of traversals of trees: https://medium.com/@ajinkyajawale/inorder-preorder-postorder-traversal-of-binary-tree-58326119d8da

//94.
//Given the root of a binary tree, return the inorder traversal of its nodes' values.

//DFS Solution using recursion - runtime = O(n), space complexity =.O(n)
var inorderTraversal = function(root) {
    let result = [];
    
    let checker = (node) => {
        if (!node)  return result;
        checker(node.left)
        result.push(node.val)
        checker(node.right)
    }
    
    checker(root);
    return result;
};

//Iterative Solution - using a stack - runtime = O(n), space complexity = O(n)
var iterativeInorder = function(root) {
    //result array 
    let result = []
    if (!root) return result

    //stack array
    let stack = []
    
    //helper function that adds node to stack array one-by-one
    let stacker = (node) => {
      while(node !== null) {
        stack.push(node)
        node = node.left
      }
    }

    //call the helper function on the given root so as to populate stack with the passed in tree
    stacker(root)

    //checking the values of the passed in tree and populating result array with values that pass the condition 
    while(stack.length > 0) {
      let leafNode = stack.pop()
      result.push(leafNode.val)
      if (leafNode.right) {
        stacker(leafNode.right)
      }
    }

    //returning result array
    return result
};

/* Pseudo code 
Helper function: 
1. check if tree is empty -> if it, return nothing 
2. check if tree has left child node -> if it does, call function on left child
    -> print value of node if it doesn't have a left child and check the right 
     -> if right child node exists, call function on right child node
     -> print value of node if it does not have a right child 
3. return printed values

Main function - call helper inside of main 
*/


