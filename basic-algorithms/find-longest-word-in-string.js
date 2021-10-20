//BASIC ALGORITHM SCRIPTING PROBLEMS

//FIND THE LONGEST WORD IN A STRING
function findLongestWordLength(str) {
    //convert string into an array of strings
    let arrayOfStrings = str.split(" ")
    //declare an empty array 
    let wordLengths = []
    //console.log(arrayOfStrings.length)
    for (let i = 0; i < arrayOfStrings.length; i++) {
      wordLengths.push(arrayOfStrings[i].length);
    }
    return  Math.max(...wordLengths)
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");