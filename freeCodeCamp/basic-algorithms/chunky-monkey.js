//BASIC ALGORITHM SCRIPTING PROBLEMS

//CHUNKY MONKEY
function chunkArrayInGroups(arr, size) {
    //declare new array var
    let finalArr = [];
    //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
    //for loop that starts at 0th index and stops at last element in the arr; += splits the arr every size elements
    for (let i = 0; i < arr.length; i+= size) {
      //pushing size elements as sub-arrays to finalArr
      finalArr.push(arr.slice(i, i + size));
    }
   return finalArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

