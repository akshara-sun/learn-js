// 1480
/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/

/*
PSEUDO CODE
1. initialize result array 
2. start for loop from 0 to nums.length 
3. if i === 0, push nums[i] to result array
4. otherwise, push nums[i] + result[i-1] to result array
5. return result array
*/
const runningSum = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(nums[i]);
    } else {
      result.push(nums[i] + result[i - 1]);
    }
  }
  return result;
};
