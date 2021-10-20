//ADVANCED ALGORITHM SCRIPTING PROJECTS!

//TELEPHONE NUMBER VALIDATOR
function telephoneCheck(str) {
    let regexCheck = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  
    return regexCheck.test(str);
    
  }
  telephoneCheck("555-555-5555");
