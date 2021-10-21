//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function diffArray(arr1, arr2) {
    var newArr = [];
    let setA = new Set(arr1);
    let setB = new Set(arr2);
  
    for (let item of setA) {
      if (!setB.has(item)) {
        newArr.push(item)
      }
    }
  
    for (let item of setB) {
      if (!setA.has(item)) {
        newArr.push(item)
      }
    }
    
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);