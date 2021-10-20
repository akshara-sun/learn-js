//BASIC ALGORITHM SCRIPTING PROBLEMS

//CONFIRM THE ENDING
function confirmEnding(str, target) {
    //find the length of the target string object and save it to a var; type: number
    let targetLength = target.length;
    //extract target from string by slicing the target.length starting from the last index of given string 
    //str.slice(-targetLength)
    //check if extracted section of string matches the target
    if (str.slice(-targetLength) === target) {
      return true 
    } 
    return false
  }
