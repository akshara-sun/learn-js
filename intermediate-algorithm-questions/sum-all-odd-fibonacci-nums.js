//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function sumFibs(num) {
    let limit = num;
    let oddNumsArr = [];
    let start = 1;
    let current = 1;
    let temp;
    let tracker = [1];
    while (num > 1) {
      temp = start;
      start = start + current;
      current = temp;
      num--;
      tracker.push(current)
    }
  
    for (let i = 0; i < tracker.length; i++) {
      if (tracker[i] <= limit && tracker[i] % 2 == 1) {
        oddNumsArr.push(tracker[i])
      }
    }
    return oddNumsArr.reduce((x,y) => x+y)
  }
  
  sumFibs(4);