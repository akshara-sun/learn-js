//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function pairElement(str) {
    let finalArr = [];
    let pairings = str.split("");
    finalArr = pairings.map(letter => new Array())
    for (let i = 0; i < pairings.length; i++) {
      finalArr[i].push(pairings[i])
      if (finalArr[i] == "G") {
        finalArr[i].push("C")
      } 
      if (finalArr[i] == "C") {
        finalArr[i].push("G")
      } 
      if (finalArr[i] == "T") {
        finalArr[i].push("A")
      } 
      if (finalArr[i] == "A") {
        finalArr[i].push("T")
      } 
    }
    return finalArr
  }
  
  pairElement("GCG");
  
  /*Pseudo code:
  - create empty array 
  - find the length of string and create str.length number of array inside of the empty array 
  OR 
  - split the string into an array of strings and for each string, create an array inside of the big array that contains those strings and their corresponding pairs
   */