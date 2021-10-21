//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function addTogether() {
    let [num1, num2] = arguments;
    let numCheck = (num) => {return Number.isInteger(num)};
    if (!numCheck(num1)) {
      return undefined;
    } else if (numCheck(num1) && numCheck(num2)) {
      return num1 + num2
    } else if (!num2) {
      return function newVal(newNum) {
        if (numCheck(newNum)) {
          return num1 + newNum;
        }
      }
    }
  }
  
  addTogether(2,3);