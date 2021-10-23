//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let resArr = [];
    resArr = nums.map(number => Math.pow(number, 2)).sort((a,b) => a-b);
    return resArr;
};