//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function destroyer(arr) {
    let set = new Set();
    let resArr = [];
    for (let i = 1; i < arguments.length; i++) {
      set.add(arguments[i])
    }
    
    for (let num of arr) {
      if (!set.has(num)) {
        resArr.push(num);
      }
    }
    return resArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);