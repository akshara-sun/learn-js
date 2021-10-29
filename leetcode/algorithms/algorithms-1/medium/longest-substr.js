// Given a string s, find the length of the longest substring without repeating characters.

//Solution - runtime - O(n)
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let left = 0; 
    let result = 0;
    let seen = new Set();
    for (let right = 0; right < s.length; right++) {
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            if (right - left + 1 > result) {
                result = right - left + 1
            }
            continue;
        }
        while (s[left] !== s[right]) {
            seen.delete(s[left]);
            left++
        } left++
    }
    return result;
};