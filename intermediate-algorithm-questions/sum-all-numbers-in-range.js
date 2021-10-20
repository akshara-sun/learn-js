//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function sumAll(arr) {
    let sum;
    let resArr = [];
    arr.sort();
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let newLength = max - min + 1;
    resArr.push(min);
    for (let cur = 1; cur < newLength; cur++) {
      if (cur < max) {
        resArr.push(min+cur)
      }
    }
    sum = resArr.reduce((x,y) => x + y)
    return sum;
  }
  
  sumAll([1, 4]);
  
  //runtime - n + n
