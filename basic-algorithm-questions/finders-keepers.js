//BASIC ALGORITHM SCRIPTING PROBLEMS

//FINDERS KEEPERS
function findElement(arr, func) { //func is pre-defined
    //given
    let num = 0;
    //loops through array
    for (let i = 0; i <= arr.length; i++) {
      //assigns num to arr[i], as in each element of the arr
      num = arr[i];
      //because the function is predefined, all we have to do is check if num passes the test and if it does, then num is returned.
      if (func(num)) {
        return num;
      }
    }
    //returning undefined if num doesn't pass the check
    return undefined;
  }
  
findElement([1, 2, 3, 4], num => num % 2 === 0);