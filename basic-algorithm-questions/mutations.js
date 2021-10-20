//BASIC ALGORITHM SCRIPTING PROBLEMS

  //MUTATIONS
function mutation(arr) {
    //split up first element into an array of strings
    let firstWord = arr[0].toLowerCase().split('');
    //split up second element into an array of strings
    let secondWord = arr[1].toLowerCase().split('');
    //loop through secondWord and check to see if firstWord arr includes any of those letters
    for (let i = 0; i < secondWord.length; i++) {
      //if the firstWord does not include any of the letters in the second word, return false
      if (!firstWord.includes(secondWord[i])) {
        return false
      }
    }
    return true
  }
  
  mutation(["hello", "hey"]);
  
  //Note: It's important to check the false conditional first, 
  //because if you checked if (firstWord.incloudes(secondWord[i])) { return true} -> 
  //this would have just stopped at the first letter if the first characters of the strings match. 
  //In other words, it won't loop through the entire length of the string.