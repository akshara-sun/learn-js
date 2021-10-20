//BASIC ALGORITHM SCRIPTING PROBLEMS

//TITLE CASE A SENTENCE
function titleCase(str) {
    str = str.toLowerCase();
    str = str.replace(str[0], str[0].toUpperCase());
    for (let i = 0; i <= str.length; i++) {
       if (str[i] === " ") {
         //split the string into two halves
         let beforeWhiteSpace = str.slice(0, [i+1]);
        //  console.log(beforeWhiteSpace);  
         let afterWhiteSpace = str.slice(i+1, str.length);  
        //  console.log(afterWhiteSpace); 
         str = beforeWhiteSpace + afterWhiteSpace.replace(afterWhiteSpace[0], afterWhiteSpace[0].toUpperCase())  
      }
    }
    return str;
  }
  
titleCase("I'm a little tea pot");