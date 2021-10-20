//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    str = str.split("")
    let index = alphabet.indexOf(str[0]);
    let segment = alphabet.slice(index, str.length+index+1);
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== segment[i]) {
        return segment[i];
      }
    } 
  }
  
  fearNotLetter("stvwx");
  
  /*Pseudo code:
  - str -> arr
  - find the index of the first element of the arr in alphabet
  - find the length of the arr and copy the same num of letters from the alphabets array and save it in a new variable  
  - compare arr against the new var and return the letter that is missing
   */