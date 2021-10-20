//BASIC ALGORITHM SCRIPTING PROBLEMS

//WHERE DO I BELONG
function getIndexToIns(arr, num) {
    let indexOfNum = 0;
    //using the .sort() method, sort the arr in ascending order
    arr.sort((a,b) => a-b);
    //loop through arr to check if the given num is greater than any of the elements in the arr
    for (let i = 0; i <= arr.length; i++) {
      //if num is greater than arr[i], then return indexOfNum = i + 1
      if (num > arr[i]) {
        indexOfNum = i + 1
      }
    }
    return indexOfNum;
  }
  
  getIndexToIns([5, 3, 20, 3], 5);
  
  //.sort() sorts in alphabetical order because it converts all elements in the array into strings. 
  //In order to sort in numeric order, you must compare the numbers by this arrow function:
  // ((a,b) =>. a-b), which allows it to sort the numbers such that the lesser one goes first followed by the greater one. 
  //The minus sign does not subtract.