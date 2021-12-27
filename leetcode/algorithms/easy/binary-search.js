/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
*/

var search = function(nums, target) {
    for (let element of nums) {
        if (element === target) {
            return nums.indexOf(element)
        }
    }
    return -1;
};