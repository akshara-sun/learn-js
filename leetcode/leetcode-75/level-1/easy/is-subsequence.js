//392.
/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/
// what is the function for isSubsequence?
const isSubsequence = (source, target) => {
  // is source is empty, return true
  if (source.length === 0) {
    return true;
  }
  // is target is empty, return false
  if (target.length === 0) {
    return false;
  }
  // intialize pointer for source
  let sourcePointer = 0;
  // intialize pointer for target
  let targetPointer = 0;
  // start loop
  while (sourcePointer < source.length && targetPointer < target.length) {
    // if source[sourcePointer] === target[targetPointer], increment both pointers.
    if (source[sourcePointer] === target[targetPointer]) {
      sourcePointer++;
      targetPointer++;
    } // otherwise, increment targerPointer
    else {
      targetPointer++;
    }
  }
  // if sourcePointer is equal to source.length, return true
  if (sourcePointer === source.length) {
    return true;
  }
  return false;
};
