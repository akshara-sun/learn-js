/*
Given a 0-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 0 <= index1 < index2 < numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1 + 1, index2 + 1] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//Runtime - O(n), space complexity O(1)
 var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length-1;
    while (start < end) {
      if (numbers[start] + numbers[end] === target) {
          return [start+1, end+1]
      } else if (numbers[start] + numbers[end] > target) {
        end--;
      } else {
        start++;
      }
    }
      return [];
  }

