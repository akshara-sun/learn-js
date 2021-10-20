//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

function steamrollArray(arr) {
    let flatArr = [].concat(...arr);
    for (let i = 0; i < flatArr.length; i++) {
      if (Array.isArray(flatArr[i])) {
        return steamrollArray(flatArr);
      }
    }
    return flatArr;
  }
  
  
  
  steamrollArray([1, [2], [3, [[4]]]]);