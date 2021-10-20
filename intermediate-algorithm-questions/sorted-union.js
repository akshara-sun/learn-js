//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function uniteUnique(arr) {
    let res = [];
    let set = new Set();
    for (let i = 0; i < arguments.length; i++) {
      for (let num of arguments[i]) {
        if (arguments[i].includes(num)) {
          set.add(num);
        } 
        res = Array.from(set)
      }
    }
    return res;
    
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  //pseudo code
  // in order to avoid duplicates, create a set and push the values of all the arrays into that
  //using the set, you can check how many times a number appears in total amongst the three arrays - if it's just once or three times, then add to result array. 