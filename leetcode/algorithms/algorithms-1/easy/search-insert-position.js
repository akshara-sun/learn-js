/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Most optimal solution:
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return nums.length;
}

//Naively implemented solution
// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return nums.indexOf(nums[i])
//         } 
//     }
//     nums.push(target);
//     nums.sort((a,b) => a-b)
//     return nums.indexOf(target);
// };