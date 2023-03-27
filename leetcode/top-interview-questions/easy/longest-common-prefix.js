/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
const longestCommonPrefix = (strs) => {
  let prefix = "";
  if (strs.length === 0) {
    return prefix;
  }
  for (let letterIndex = 0; letterIndex < strs[0].length; letterIndex++) {
    const characterMatch = strs[0][letterIndex];
    for (let wordIndex = 0; wordIndex < strs.length; wordIndex++) {
      if (strs[wordIndex][letterIndex] !== characterMatch) {
        return prefix;
      }
    }
    prefix = prefix + characterMatch;
  }
  return prefix;
};
