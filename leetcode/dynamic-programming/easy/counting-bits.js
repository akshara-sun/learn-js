//338.
//Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.


//Runtime - O(n^2) - not the most optimal solution
const toBinary = (num) => {
    let count = 0;
    let converted = num.toString(2).split('')
    for (let i = 0; i < converted.length; i++) {
      if (converted[i] == 1) {
        count++
      }
    }
   return count
}

var countBits = function(n) {
    let lengthOfNewArr = n+1;
    let result = []
    for (let j = 0; j < lengthOfNewArr; j++) {
      
        result.push(toBinary(j))
    }
   return result;
};

/*
Pseudo code
1. helper function that takes a number and converts number to its binary equivalent 
2. loop through the binary equivalent and count the number of 1s and return that count
3. call helper method inside of countBits function for each index in an array that has a length of n+1
*/