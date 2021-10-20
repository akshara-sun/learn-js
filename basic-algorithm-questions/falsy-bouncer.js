//BASIC ALGORITHM SCRIPTING PROBLEMS

//13.FALSY BOUNCER
function bouncer(arr) {
    //create an array that will contain only the truthy values (a.k.a falsy values will be removed)
    let truthyArr = [];
    //loop through given arr
    for (let i = 0; i <= arr.length; i++) {
      //set condition that checks the truthyness of each el in arr
      if (arr[i]) {
        truthyArr.push(arr[i])
      }
    }
    return truthyArr;
  }
  
  bouncer([7, "ate", "", false, 9]);