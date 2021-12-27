/*Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order. */

/**
 * @param {string} s
 * @return {string}
 */

//Helper function that reverses a string
//Runtime - O(n) where n = length of input 
var reverseString = function(s) {
    s = s.split("").reverse().join("");
    return s;
  };
  
  //Runtime = O(n)
  var reverseWords = function(s) {
      s = s.split(" ");
      let word = ""
      let resArr = [];
      for (let i = 0; i < s.length; i++) {
          resArr.push(reverseString(s[i]))
      }
      return resArr.join(" ");
  };