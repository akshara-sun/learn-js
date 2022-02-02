/*
376.
A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.

For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Given an integer array nums, return the length of the longest wiggle subsequence of nums.
*/

// Runtime O(n)
var wiggleMaxLength = function(nums) {
    let directions = [];
    let subseqLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1]-nums[i] > 0) {
            directions.push('up')
        } else if (nums[i+1]-nums[i] < 0) {
            directions.push('down')
        }
    }
    subseqLength = directions.length + 1;
    for (let j = 0; j < directions.length; j++) {
        if (directions[j] === directions[j+1]) {
            subseqLength--
        }
    }
    return subseqLength; 
};

/*
Pseudo code
1. variable to keep track of directions of diffs between nums in array
2. subsequence variable to keep track of subsequence length
3. loop through given array of Nums and monitor differences between nums
    Conditions inside of loop:
       - if the difference is a positive number, push 'up' to direction array 
            make previousDiff = 'up' before continuing loop
       - if the difference is a negative number, push 'down' to direction array 
            make previousDiff = 'down' before continuing loop
4. make subsequence length = directions.length+1 (+ 1 to equal length of original array)
5. loop through directions array 
    -anytime consecutive values in the direction array are the same, decrement subseqlength 
6. return subseqLength
*/