//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS
 
function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      after = after.replace(after[0], after[0].toUpperCase())
    } else {
      after = after.replace(after[0], after[0].toLowerCase())
    }
    if (str.includes(before)) {
      str = str.replace(before, after)
    }
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  /* Pseudo Code
  - check to see if the first letter of before arg is capitalized
    - if yes, capitalize the first letter of the after arg
    - replace after arg with new version of after arg
  - else, make lowercase and replace
  - if string includes the before arg, then replace with new after arg
  - return the final string 
   */