//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function translatePigLatin(str) {
    //variables that will keep track of the first syllable, vowel regex, segment of the word that is to be appended to the string at the end, and the pig latin version of the word
    let vowelIndex;
    let vowelRegex = /[a,e,i,o,u]/gi
    let segment;
    let pigLatin;
    //base case
    if (str[0].match(vowelRegex)) {
      pigLatin = str + "way";
    //case where string does not have any vowels
    } else if (!str.match(vowelRegex)) {
      pigLatin = str + "ay";
    // case where string has a mixture of vowels and consonants
    } else {
      vowelIndex = str.search(vowelRegex);
      segment = str.slice(0, vowelIndex);
      str = str.replace(segment, "")
      pigLatin = str + segment +"ay"
    }
    return pigLatin;
  }
  
  translatePigLatin("consonant");
  
  /*Pseudo code:
  base case: 
  - string starts with a vowel so ending should be "way"
  - string does not have any vowels so ending should be "ay"
  //consonant case where the word starts with a consonant
  - find the index of the consonant after the first vowel and save it to a var after removing it from string
   */