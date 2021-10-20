//BASIC ALGORITHM SCRIPTING PROBLEMS

//RETURN LARGEST NUMBERS IN AN ARRAY

function largestOfFour(arr) {
    //declare an empty array
    let newArr = [];
    // loop through passed-in arr
    for (let i = 0; i < arr.length; i++) {
      newArr.push(Math.max(...arr[i]))
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  //Because Math.max() accepts an entire array, you can just pass in the sub-array as the parameter. 
  //In this case, arr[i] indicates the arrays at each index, which is then passed into the method as a parameter.
