//BASIC ALGORITHM SCRIPTING PROBLEMS

//1. REVERSE A STRING
//Solution 1:
function reverseString(str) {
    //declare empty string variable
    let newString = "";
    //for loop that starts at the last index and decrements to the first index
    for (let i = str.length - 1; i >= 0; i--) {
    //concatenate reversed string to empty string variable
    newString += str[i]
   }
  // returning the new string stops the function
  return newString
}


//Solution 2: 
function reverseString(str) {
    //save length of string for iterating purposes
    let strLength = str.length;
    //turn string into array
    let stringArr = str.split('');
    //array to store reversed string
    let reversed = [];
   
    //iterate through all characters in string
    for(let i =0; i < strLength; i++){
      //remove first letter from original string
      let first = stringArr.shift();
      //add letter to begginning of reversed string
      reversed.unshift(first);
    }
    //change array into string
    reversed = reversed.join('');
    //return reversed string
    return reversed;
} 