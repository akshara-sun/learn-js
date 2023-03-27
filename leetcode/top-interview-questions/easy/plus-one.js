/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
*/

const plusOne = (digits) => {
  // if digits is empty, return
  if (!digits) return;
  // start loop at the end of the array
  for (let i = digits.length - 1; i >= 0; i--) {
    // increment the last digit by 1
    digits[i]++;
    // if the last digit is greater than 9, then make it 0
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  // add 1 in front of the array for cases in which the last number checked was a 9
  digits.unshift(1);
  return digits;
};
