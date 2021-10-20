//BASIC ALGORITHM SCRIPTING PROBLEMS

//SLICE AND SPLICE
function frankenSplice(arr1, arr2, n) {
    //declare empty array variable
    //this array will serve as a copy of arr2, in which all the elements of arr1 will be pushed at the nth index
    let finalArray = [];
    //loop through the arr2 
    for (let i = 0; i < arr2.length; i++) {
      //push all elements of arr2 into finalArray
      finalArray.push(arr2[i]);
    }
    //loop through finalArray and insert arr1 elements at nth index
    for (let j = 0; j <= finalArray.length; j++) {
      //find the nth index
      if (j === n) {
        //using the splice index, we are specifying three parameters: index, deleteCount, and items to be added
        finalArray.splice(n, 0, ...arr1)
      }
    }
    return finalArray
  }
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);