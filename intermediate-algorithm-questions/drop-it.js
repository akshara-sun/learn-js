//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

//Solution 1
function dropElements(arr, func) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      if (!func(arr[0])) {
        arr.splice(0,1)
      } else {
        return arr
      }
    }
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  //runtime = o(n^2)
  
  //Solution 2
  function dropElements(arr, func) {
    let i;
    for (i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        break;
      } 
    }
    arr.splice(0, i)
    return arr;
  }
  dropElements([1, 2, 3], function(n) {return n < 3; });
  //runtime = o(n)