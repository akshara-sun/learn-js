// 409
/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/
const longestPalindrome = (s) => {
  if (!s) return 0; // empty string case

  let obj = {}; // to count the occurrences of each character in the string

  // count the occurrences of each character in the string
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }

  let palindromeLength = 0;
  let oddCount = 0;

  // iterate over the characters in the string
  for (let letter in obj) {
    let count = obj[letter];

    // add the maximum even count for the current character to the palindrome length
    palindromeLength += Math.floor(count / 2) * 2;

    // if the current count is odd, and we haven't seen another odd count before, add one to the palindrome length
    if (count % 2 === 1 && oddCount === 0) {
      palindromeLength += 1;
      oddCount += 1;
    }
  }

  return palindromeLength;
};
