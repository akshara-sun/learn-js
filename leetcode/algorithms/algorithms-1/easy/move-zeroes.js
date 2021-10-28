//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.

//Optimal solution - O(n) - uses extra space though
var moveZeroes = function (nums) {
    let newArr = [];
    
    for (let curr = 0; curr < nums.length; curr++) {
      if (nums[curr] !== 0) {
        newArr.push(nums[curr])
      } 
    }
    
    let numberOfZeroes = nums.length - newArr.length;
    if (numberOfZeroes > 0) {
     for (let i = 0; i < numberOfZeroes; i++) {
       newArr.push(0)
     }
    }
  
    for (let j = 0; j < nums.length; j++) {
      nums[j] = newArr[j]
    }
  }
  
//Solution with O(n^2) runtime (yikes!)
//   var moveZeroes = function (nums) {
//     let move = []
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === 0) {
//         move.push(nums.splice(i, 1)) ;
//       }
//     }
//     move = move.flat()
//     nums.push(...move)
//   }

