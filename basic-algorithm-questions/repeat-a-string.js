//BASIC ALGORITHM SCRIPTING PROBLEMS

//REPEAT A STRING
function repeatStringNumTimes(str, num) {
    // condition 1: num has to be positive and if it isn't, then return empty string
    if (num <= 0) {
      return "";
    }
    // condition 2: if num is one, return string as is
    if (num === 1) {
      return str;
    }
    //condition 3: if num > 1, return str and run function again on string decremeting each time until you reach 1
    if (num >1) {
     return str + repeatStringNumTimes(str, num-1)
    }
  }
  
  repeatStringNumTimes("abc", 3);