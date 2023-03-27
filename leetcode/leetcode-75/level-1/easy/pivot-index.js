// 724.
/*
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.

Tescases:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 6 + 5 + 6 = 11
*/

/*
PSEUDO CODE
1. get total sum of nums in array and save to var totalSum
2. initialize leftSum = 0
3. loop throuugh array again and this time:
    a. get rightSum = totalSum - nums[i] - leftSum
    b. if right sum and left sum match, then return the index
    c. otherwise, increase leftsum by adding value of nums of i
4. if no match, return -1
*/

let pivotIndex = (nums) => {
  //
  let totalSum = 0;
  // this for loop iterates through the entire array in order to calculate the total sum
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - nums[i] - leftSum;
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
