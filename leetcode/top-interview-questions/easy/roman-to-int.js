/*
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/

const romanToInt = (s) => {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let numericalValue = 0;

  for (let i = 0; i < s.length; i++) {
    let currentChar = romans[s[i]];
    let nextChar = romans[s[i + 1]];
    if (currentChar < nextChar) {
      numericalValue += nextChar - currentChar;
      i++;
    } else {
      numericalValue += currentChar;
    }
  }
  return numericalValue;
};
