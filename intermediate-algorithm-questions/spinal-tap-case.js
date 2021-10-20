//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function spinalCase(str) {
    let arrTracker = str.split(/\s|_|(?=[A-Z])/g);
    let resStr = arrTracker.join("-");
    resStr = resStr.toLowerCase();
    return resStr;
  
  }
  
  spinalCase('thisIsSpinalTap');
  /* 
  Pseudo Code:
  - regex at which the str.split() will take place = /\s|_|(?=[A-Z])/g
  join arr with - and assign to new string
  string.toLowerCase()
  return;
  */