//BASIC ALGORITHM SCRIPTING PROBLEMS

//TRUNCATE A STRING
function truncateString(str, num) {
    //truncate means keep the beginning of the string until the given number and discard the rest 
    //if num is greater then or equal to the str.length, then just return str without truncating
    if (num >= str.length) {
      return str;
    }
    //if num is less than str.length, then .slice to extract the a portion of the string starting from the 1st element to the max string length, which is num.
    return str.slice(0, num) + "..."
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
