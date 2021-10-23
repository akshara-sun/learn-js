//Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Most optimal solution 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Helper function to be used to reverse certain elements in the array
 function reverseHelper(arr, startIndex, lastIndex) {
    while (startIndex <= lastIndex) {
      //save the first element in a var
      let saver = arr[startIndex];
      //replace first element with that in the last index
      arr[startIndex] = arr[lastIndex];
      //assign the originally saved first element to the last index
      arr[lastIndex] = saver;
      //increment the start index each time the value is altered
      startIndex++
      //decrement the last index to keep narrowing your search area
      lastIndex--
    }
  }
  
  var rotate = function(nums, k) {
    k = k % nums.length;
  
    //first reversal call - reverses the entire array 
    reverseHelper(nums, 0, nums.length - 1);
    //second reversal call - reverses only the first k elements of the array 
    reverseHelper(nums, 0, k-1);
    //third reversal call - reverses the remaining elements
    reverseHelper(nums, k, nums.length-1 )
  };  

//Naïve implementation - O(n^2) runtime
// var rotate = function(nums, k) {
//     //k also represents the number of elements from the right you are going to move. 
//     //In order to narrow down your search, you are only going to be looking at k elements on the right.
//     let start = nums.length-k;
//     let end = nums.length-1;
//     while(start <= end) {
//         nums.unshift(nums.pop())
//         end--;
//   }
// }    

