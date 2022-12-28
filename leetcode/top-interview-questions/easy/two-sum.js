/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

const twoSum = (nums, target) => {
  let difference;
  let tracker = [...nums];
  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i];
    tracker.shift();
    if (tracker.includes(difference)) {
      return [i, nums.indexOf(difference, i + 1)];
    }
  }
};
