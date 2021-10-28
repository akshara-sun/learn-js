/*Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order. */

/**
 * @param {string} s
 * @return {string}
 */

//Helper function that reverses a string 
var reverseString = function(s) {
    let temp = ""
    for (let i = s.length - 1; i >= 0; i--) {
      temp += s[i]
    }
    return temp;
  };
  
  //Runtime = O(n)
  var reverseWords = function(s) {
      s = s.split(" ");
      let word = ""
      let newArr = [];
      for (let i = 0; i < s.length; i++) {
          word = word.concat(reverseString(s[i]), " ")
      }
      word = word.trim()
      return word;
  };