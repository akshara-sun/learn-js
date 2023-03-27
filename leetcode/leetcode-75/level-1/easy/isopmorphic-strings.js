// 205.
/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Testcases:
Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false

Input: s = "paper", t = "title"
Output: true
*/

let isIsomorphic = (s, t) => {
  let letterMappings = new Map();
  let reverseMappings = new Map();
  if (s.length !== t.length) {
    return false;
  }
  for (let index = 0; index < s.length; index++) {
    let letter = s[index];
    let letter2 = t[index];
    if (letterMappings.has(letter)) {
      if (letterMappings.get(letter) !== letter2) {
        return false;
      }
    } else {
      if (reverseMappings.has(letter2)) {
        return false;
      }
      letterMappings.set(letter, letter2);
      reverseMappings.set(letter2, letter);
    }
  }
  return true;
};
